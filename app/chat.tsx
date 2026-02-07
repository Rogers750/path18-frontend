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
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

import { ChatMessage, TestCard, QuickReply, TypingIndicator, CortisolLogo } from '../src/components';
import { bloodTests, testCategories } from '../src/data/bloodTests';
import {
  Language,
  languages,
  translations,
  formatMessage,
} from '../src/data/translations';
import { Message, ConversationStep, BloodTest } from '../src/types';

interface Agent {
  id: string;
  name: string;
  gender: 'male' | 'female';
}

const AGENTS: Agent[] = [
  { id: '1', name: 'Rajesh', gender: 'male' },
  { id: '2', name: 'Amit', gender: 'male' },
  { id: '3', name: 'Vikram', gender: 'male' },
  { id: '4', name: 'Arjun', gender: 'male' },
  { id: '5', name: 'Rohan', gender: 'male' },
  { id: '6', name: 'Priya', gender: 'female' },
  { id: '7', name: 'Anjali', gender: 'female' },
  { id: '8', name: 'Neha', gender: 'female' },
  { id: '9', name: 'Divya', gender: 'female' },
  { id: '10', name: 'Pooja', gender: 'female' },
];

const getRandomAgent = (): Agent => {
  return AGENTS[Math.floor(Math.random() * AGENTS.length)];
};

export default function ChatScreen() {
  const params = useLocalSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState<ConversationStep>('tests');
  const [selectedTest, setSelectedTest] = useState<BloodTest | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>((params.lang as Language) || 'en');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [mobile, setMobile] = useState('');
  const [connectedAgent, setConnectedAgent] = useState<Agent | null>(null);
  const [isConnecting, setIsConnecting] = useState(true);
  const dotAnimation = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);

  const t = (key: keyof typeof translations['en']) => translations[selectedLanguage][key];

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Animate dots for connecting animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(dotAnimation, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }),
        Animated.timing(dotAnimation, {
          toValue: 0,
          duration: 600,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Show connecting screen first
    setTimeout(() => {
      const agent = getRandomAgent();
      setConnectedAgent(agent);
      setIsConnecting(false);
      setCurrentStep('language');

      // Initialize chat with agent greeting and language options
      setIsTyping(true);
      setTimeout(() => {
        const agenderTitle = agent.gender === 'female' ? 'Ms.' : 'Mr.';
        const greeting = `Hi! I'm ${agenderTitle} ${agent.name} from PathLab18 🙏\n\nWhich language would you prefer?`;

        const languageOptions = languages.map((lang) => `${lang.flag} ${lang.name}`);

        setMessages([{
          id: '0',
          text: greeting,
          isBot: true,
          timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
          showQuickReplies: languageOptions,
        }]);
        setIsTyping(false);
      }, 1000);
    }, 3000);
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

      // Check if user wants to browse other tests
      if (option.includes('Browse other tests') || option.includes('अन्य टेस्ट देखें')) {
        setCurrentStep('tests');
        setSelectedTest(null);
        const browseMessage = selectedLanguage === 'hi'
          ? 'ठीक है! यहाँ सभी हमारे टेस्ट हैं। आप एक अलग चुन सकते हैं 👇'
          : 'Sure! Here are all our tests. Feel free to choose a different one 👇';
        addBotMessage(browseMessage, undefined, bloodTests);
        return;
      }

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
        const mobilePrompt = selectedLanguage === 'hi'
          ? 'कृपया बुकिंग पुष्टि के लिए अपना मोबाइल नंबर साझा करें 📱'
          : 'Please share your mobile number for booking confirmation 📱';
        addBotMessage(mobilePrompt);
      } else {
        setCurrentStep('confirmation');
        const summary = selectedLanguage === 'hi'
          ? `बहुत अच्छा! आपकी बुकिंग सारांश:\n\n• टेस्ट: ${selectedTest?.name}\n• कीमत: ₹${selectedTest?.price}\n• स्थान: ${option}\n• तारीख: कल, 7:00 AM\n\nपुष्टि करें?`
          : `Great! Your booking summary:\n\n• Test: ${selectedTest?.name}\n• Price: ₹${selectedTest?.price}\n• Location: ${option}\n• Date: Tomorrow, 7:00 AM\n\nConfirm booking?`;
        const confirmOptions = selectedLanguage === 'hi'
          ? ['हाँ, पुष्टि करें ✅', 'रद्द करें']
          : ['Yes, confirm ✅', 'Cancel'];
        addBotMessage(summary, confirmOptions);
      }
    } else if (currentStep === 'confirmation') {
      if (option.includes('confirm') || option.includes('Yes') || option.includes('पुष्टि') || option.includes('हाँ')) {
        const bookingId = `PL${Date.now().toString().slice(-6)}`;
        const confirmedMsg = selectedLanguage === 'hi'
          ? `बुकिंग की गई! ✅\n\nबुकिंग आईडी: ${bookingId}\n\nहमारा संपर्क व्यक्ति विवरण की पुष्टि करने के लिए शीघ्र ही आपको कॉल करेगा।\n\nPathLab18 को चुनने के लिए धन्यवाद! 🙏`
          : `Booking Confirmed! ✅\n\nBooking ID: ${bookingId}\n\nOur contact person will call you shortly to confirm the details.\n\nThank you for choosing PathLab18! 🙏`;
        addBotMessage(confirmedMsg);
        setCurrentStep('tests');
        setSelectedTest(null);
      } else {
        // Cancel - show tests again
        const cancelMsg = selectedLanguage === 'hi'
          ? 'कोई समस्या नहीं! यहाँ हमारे टेस्ट फिर से हैं:'
          : 'No problem! Here are our tests again:';
        setCurrentStep('tests');
        addBotMessage(cancelMsg, undefined, bloodTests);
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

    // Add test benefits
    let messageWithBenefits = message;
    if (test.benefits) {
      const benefits = test.benefits[selectedLanguage] || test.benefits.en;
      messageWithBenefits = `${message}\n\n💡 ${benefits}`;
    }

    // Add appointment options plus a nudge to browse other tests
    const browseButtonText = selectedLanguage === 'hi'
      ? 'अन्य टेस्ट देखें 🔍'
      : 'Browse other tests 🔍';
    const appointmentOptionsWithNudge = [
      ...(currentT.appointmentOptions as string[]),
      browseButtonText,
    ];

    addBotMessage(messageWithBenefits, appointmentOptionsWithNudge);
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
        const summary = selectedLanguage === 'hi'
          ? `बिल्कुल! आपकी बुकिंग सारांश:\n\n• टेस्ट: ${selectedTest?.name}\n• कीमत: ₹${selectedTest?.price}\n• स्थान: होम कलेक्शन\n• मोबाइल: ${inputValue.trim()}\n• तारीख: कल, 7:00 AM\n\nपुष्टि करें?`
          : `Perfect! Your booking summary:\n\n• Test: ${selectedTest?.name}\n• Price: ₹${selectedTest?.price}\n• Location: Home Collection\n• Mobile: ${inputValue.trim()}\n• Date: Tomorrow, 7:00 AM\n\nConfirm booking?`;
        const confirmOptions = selectedLanguage === 'hi'
          ? ['हाँ, पुष्टि करें ✅', 'रद्द करें']
          : ['Yes, confirm ✅', 'Cancel'];
        addBotMessage(summary, confirmOptions);
      } else {
        const errorMsg = selectedLanguage === 'hi'
          ? 'कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें'
          : 'Please enter a valid 10-digit mobile number';
        addBotMessage(errorMsg);
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

  if (isConnecting) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.connectingContainer}>
          {/* Animated Dots */}
          <View style={styles.dotsContainer}>
            <View style={styles.dot} />
            <Animated.View
              style={[
                styles.dot,
                {
                  opacity: dotAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.3, 1],
                  }),
                },
              ]}
            />
            <View style={styles.dot} />
          </View>

          <Text style={styles.connectingText}>We are connecting you with our agent...</Text>
          <Text style={styles.connectingSubtext}>Please wait a moment</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <CortisolLogo size={50} color="#ef4444" textColor="#fff" />
          <View>
            <Text style={styles.headerTitle}>Pathlab18</Text>
            <Text style={styles.headerSubtitle}>
              {connectedAgent ? `Chat with ${connectedAgent.name}` : 'Smart Blood Test Booking'}
            </Text>
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
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e1b4b',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
    paddingHorizontal: 8,
  },
  testsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 16,
    gap: 10,
    justifyContent: 'space-between',
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
    backgroundColor: '#00d9ff',
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
  connectingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00d9ff',
  },
  connectingText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e1b4b',
    marginBottom: 8,
    textAlign: 'center',
  },
  connectingSubtext: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});
