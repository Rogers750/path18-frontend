import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { ChatMessage, TestCard, QuickReply, TypingIndicator } from '../src/components';
import { bloodTests, testCategories } from '../src/data/bloodTests';
import {
  Language,
  languages,
  translations,
  formatMessage,
} from '../src/data/translations';
import { Message, ConversationStep, BloodTest } from '../src/types';

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState<ConversationStep>('language');
  const [selectedTest, setSelectedTest] = useState<BloodTest | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const t = (key: keyof typeof translations['en']) => translations[selectedLanguage][key];

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Show connecting message
    setIsTyping(true);
    setTimeout(() => {
      setMessages([{
        id: '0',
        text: "Please wait, connecting you with our agent...\n\nकृपया प्रतीक्षा करें, हम आपको हमारे एजेंट से जोड़ रहे हैं...",
        isBot: true,
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
      }]);
      setIsTyping(false);

      // Then introduce agent
      setTimeout(() => {
        addBotMessage(
          "Hi! I'm Priya from PathLab18 🙏\n\nPlease select your preferred language:\n\nकृपया अपनी भाषा चुनें:",
          languages.map((lang) => `${lang.nativeName} (${lang.name})`)
        );
      }, 1500);
    }, 1000);
  }, []);

  const addBotMessage = (text: string, quickReplies?: string[], tests?: BloodTest[]) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        isBot: true,
        timestamp: new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        showQuickReplies: quickReplies,
        showTests: tests,
      };
      setMessages((prev) => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleQuickReply = (option: string) => {
    addUserMessage(option);

    if (currentStep === 'language') {
      // Find selected language
      const selectedLang = languages.find(
        (lang) => option.includes(lang.nativeName) || option.includes(lang.name)
      );

      if (selectedLang) {
        setSelectedLanguage(selectedLang.code);
        setCurrentStep('tests');

        // Show language confirmation + welcome + all tests as nudges
        const langTranslations = translations[selectedLang.code];
        addBotMessage(
          `${langTranslations.languageSelected}\n\nHere are our tests - tap any to book! 👇`,
          undefined,
          bloodTests
        );
      }
      return;
    }

    const currentT = translations[selectedLanguage];

    if (currentStep === 'welcome') {
      const welcomeOptions = currentT.welcomeOptions as string[];

      if (option === welcomeOptions[0] || option === welcomeOptions[1]) {
        // Book a test or View popular tests
        setCurrentStep('category');
        addBotMessage(
          currentT.showCategories as string,
          testCategories.map((cat) => `${cat.icon} ${cat.name}`)
        );
      } else if (option === welcomeOptions[2]) {
        // Health checkup package
        const packages = bloodTests.filter((t) => t.category === 'package');
        setCurrentStep('tests');
        addBotMessage(currentT.healthPackages as string, undefined, packages);
      } else if (option === welcomeOptions[3]) {
        // I have a prescription
        addBotMessage(
          currentT.prescriptionHelp as string,
          testCategories.map((cat) => `${cat.icon} ${cat.name}`)
        );
        setCurrentStep('category');
      } else if (option.includes('Book another') || option.includes('बुक') || option.includes('முன்பதிவு')) {
        // Book another test - restart flow
        addBotMessage(
          currentT.welcome as string,
          currentT.welcomeOptions as string[]
        );
      }
    } else if (currentStep === 'category') {
      const category = testCategories.find((cat) => option.includes(cat.name));
      if (category) {
        const categoryTests = bloodTests.filter((t) => t.category === category.id);
        setCurrentStep('tests');
        addBotMessage(
          formatMessage(currentT.foundTests as string, { category: category.name }),
          undefined,
          categoryTests
        );
      }
    } else if (currentStep === 'appointment') {
      const appointmentOptions = currentT.appointmentOptions as string[];

      if (option === appointmentOptions[0] || option === appointmentOptions[1]) {
        // Tomorrow morning or evening
        setCurrentStep('location');
        addBotMessage(
          currentT.selectLocation as string,
          currentT.locationOptions as string[]
        );
      } else if (option === appointmentOptions[2]) {
        // Pick another date
        addBotMessage(
          currentT.pickAnotherDate as string,
          currentT.dateOptions as string[]
        );
      } else {
        // Date selected from dateOptions
        setCurrentStep('location');
        addBotMessage(
          currentT.selectLocation as string,
          currentT.locationOptions as string[]
        );
      }
    } else if (currentStep === 'location') {
      setSelectedLocation(option);
      if (option.toLowerCase().includes('home') || option.toLowerCase().includes('घर')) {
        setCurrentStep('mobile');
        addBotMessage("Please share your mobile number for booking confirmation 📱");
      } else {
        setCurrentStep('confirmation');
        const summary = `Great! Your booking summary:\n\n• Test: ${selectedTest?.name}\n• Price: ₹${selectedTest?.price}\n• Location: ${option}\n• Date: Tomorrow, 7:00 AM\n\nConfirm booking?`;
        addBotMessage(summary, ['Yes, confirm ✅', 'Cancel']);
      }
    } else if (currentStep === 'confirmation') {
      if (option.includes('confirm') || option.includes('Yes')) {
        const bookingId = `PL${Date.now().toString().slice(-6)}`;
        addBotMessage(
          `Booking Confirmed! ✅\n\nBooking ID: ${bookingId}\n\nOur contact person will call you shortly to confirm the details.\n\nThank you for choosing PathLab18! 🙏`
        );
        setCurrentStep('tests');
        setSelectedTest(null);
      } else {
        // Cancel - show tests again
        setCurrentStep('tests');
        addBotMessage("No problem! Here are our tests again:", undefined, bloodTests);
      }
    }
  };

  const handleTestSelect = (test: BloodTest) => {
    setSelectedTest(test);
    addUserMessage(`${test.name}`);
    setCurrentStep('appointment');

    const currentT = translations[selectedLanguage];
    const discount = test.originalPrice
      ? Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100)
      : 0;

    const discountText = discount > 0
      ? ` (${formatMessage(currentT.discount as string, { percent: discount })})`
      : '';

    const message = formatMessage(currentT.testSelected as string, {
      testName: test.name,
      price: test.price,
      discount: discountText,
    });

    addBotMessage(message, currentT.appointmentOptions as string[]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    const currentT = translations[selectedLanguage];

    // Handle mobile number input
    if (currentStep === 'mobile') {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (phoneRegex.test(inputValue.trim())) {
        setMobile(inputValue.trim());
        setCurrentStep('confirmation');
        const summary = `Perfect! Your booking summary:\n\n• Test: ${selectedTest?.name}\n• Price: ₹${selectedTest?.price}\n• Location: Home Collection\n• Mobile: ${inputValue.trim()}\n• Date: Tomorrow, 7:00 AM\n\nConfirm booking?`;
        addBotMessage(summary, ['Yes, confirm ✅', 'Cancel']);
      } else {
        addBotMessage("Please enter a valid 10-digit mobile number");
      }
      setInputValue('');
      return;
    }

    const lowerInput = inputValue.toLowerCase();
    if (lowerInput.includes('thyroid') || lowerInput.includes('tsh') || lowerInput.includes('थायरॉ')) {
      const thyroidTests = bloodTests.filter(
        (t) =>
          t.name.toLowerCase().includes('thyroid') ||
          t.name.toLowerCase().includes('tsh')
      );
      addBotMessage(
        formatMessage(currentT.foundTests as string, { category: 'thyroid' }),
        undefined,
        thyroidTests
      );
      setCurrentStep('tests');
    } else if (
      lowerInput.includes('diabetes') ||
      lowerInput.includes('sugar') ||
      lowerInput.includes('मधुमेह') ||
      lowerInput.includes('शुगर')
    ) {
      const diabetesTests = bloodTests.filter((t) => t.category === 'diabetes');
      addBotMessage(
        formatMessage(currentT.foundTests as string, { category: 'diabetes' }),
        undefined,
        diabetesTests
      );
      setCurrentStep('tests');
    } else if (lowerInput.includes('vitamin') || lowerInput.includes('विटामिन')) {
      const vitaminTests = bloodTests.filter((t) => t.category === 'vitamin');
      addBotMessage(
        formatMessage(currentT.foundTests as string, { category: 'vitamin' }),
        undefined,
        vitaminTests
      );
      setCurrentStep('tests');
    } else {
      addBotMessage(
        currentT.searchHelp as string,
        currentT.searchOptions as string[]
      );
    }

    setInputValue('');
  };

  const currentT = translations[selectedLanguage];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoContainer}>
            <Ionicons name="flask" size={26} color="#6366f1" />
          </View>
          <View>
            <Text style={styles.headerTitle}>PathLab18</Text>
            <Text style={styles.headerSubtitle}>Smart Blood Test Booking</Text>
          </View>
        </View>
        <View style={styles.onlineIndicator}>
          <View style={styles.onlineDot} />
          <Text style={styles.onlineText}>Online</Text>
        </View>
      </View>

      {/* Chat Messages */}
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message) => (
            <View key={message.id}>
              <ChatMessage
                message={message.text}
                isBot={message.isBot}
                timestamp={message.timestamp}
              />

              {/* Show test cards in grid */}
              {message.showTests && message.showTests.length > 0 && (
                <View style={styles.testsGrid}>
                  {message.showTests.map((test) => (
                    <TestCard
                      key={test.id}
                      name={test.name}
                      description={test.description}
                      price={test.price}
                      originalPrice={test.originalPrice}
                      duration={test.duration}
                      parameters={test.parameters}
                      popular={test.popular}
                      onSelect={() => handleTestSelect(test)}
                    />
                  ))}
                </View>
              )}

              {/* Show quick replies */}
              {message.showQuickReplies && message.showQuickReplies.length > 0 && (
                <QuickReply options={message.showQuickReplies} onSelect={handleQuickReply} />
              )}
            </View>
          ))}

          {isTyping && <TypingIndicator />}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              placeholder={currentT.inputPlaceholder as string}
              placeholderTextColor="#9ca3af"
              onSubmitEditing={handleSendMessage}
              returnKeyType="send"
            />
          </View>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
            activeOpacity={0.8}
          >
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Footer Info */}
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Ionicons name="time-outline" size={14} color="#6b7280" />
            <Text style={styles.footerText}>{currentT.sameDayReports}</Text>
          </View>
          <View style={styles.footerItem}>
            <Ionicons name="home-outline" size={14} color="#6b7280" />
            <Text style={styles.footerText}>{currentT.homeCollection}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6366f1',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  onlineIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
  },
  onlineText: {
    fontSize: 12,
    color: '#fff',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: 16,
  },
  testsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 48,
    marginRight: 16,
    marginBottom: 16,
    gap: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    gap: 12,
  },
  inputWrapper: {
    flex: 1,
  },
  input: {
    backgroundColor: '#f3f4f6',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 15,
    color: '#1f2937',
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerText: {
    fontSize: 12,
    color: '#6b7280',
  },
});
