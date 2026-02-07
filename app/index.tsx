import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import { CortisolLogo } from '../src/components';

export default function LandingPage() {
  const router = useRouter();

  const navigateToChat = (language: 'en' | 'hi') => {
    router.push({ pathname: '/chat', params: { lang: language } });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <CortisolLogo size={50} color="#ef4444" textColor="#fff" />
            <View style={styles.nav}>
              <Text style={styles.navItem}>What We Do</Text>
              <Text style={styles.navItem}>About</Text>
              <Text style={styles.navItem}>Blog</Text>
              <Text style={styles.navItem}>Login</Text>
              <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>
              Transforming{'\n'}Health Testing,{'\n'}Together.
            </Text>
            <Text style={styles.heroSubtitle}>
              At Pathlab18, we combine innovative technology with modern health needs to help
              you get accurate blood test results. We're simplifying the world of lab testing,
              empowering people with reliable data and transforming healthcare delivery with
              software & media tools.
            </Text>
            <View style={styles.heroButtons}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => navigateToChat('en')}
              >
                <Text style={styles.primaryButtonText}>Book Test Now!!! 25% off</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => router.push('/learn-more')}
              >
                <Text style={styles.secondaryButtonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quote Section */}
        <View style={styles.quoteSection}>
          <Text style={styles.quote}>"APNA BLOOD TEST</Text>
          <Text style={styles.quote}>KARWAO BOSS!"</Text>
          <Text style={styles.quoteAuthor}>- PATHLAB18</Text>
        </View>

        {/* Purpose Section */}
        <View style={styles.purposeSection}>
          <Text style={styles.sectionTitle}>Our Purpose</Text>
          <View style={styles.purposeGrid}>
            <View style={styles.purposeCard}>
              <Text style={styles.purposeCardTitle}>Your Health, Our Priority.</Text>
              <Text style={styles.purposeCardText}>
                Pathlab18 was founded with a mission to make quality blood testing accessible to everyone.
                We believe that understanding your health through regular blood tests is the first step
                toward a healthier life. Our team of certified lab technicians and healthcare professionals
                work tirelessly to provide accurate, reliable results that you can trust for making
                informed health decisions.
              </Text>
            </View>
            <View style={styles.purposeCard}>
              <Text style={styles.purposeCardTitle}>Affordable & Accurate Testing.</Text>
              <Text style={styles.purposeCardText}>
                We understand that healthcare costs can be overwhelming. That's why we've invested in
                advanced diagnostic equipment and streamlined processes to bring you the most competitive
                prices without compromising on accuracy. From basic health checkups to specialized hormone
                and vitamin tests, we offer comprehensive blood testing services that fit your budget and
                health needs.
              </Text>
            </View>
            <View style={styles.purposeCard}>
              <Text style={styles.purposeCardTitle}>Convenient Home Collection.</Text>
              <Text style={styles.purposeCardText}>
                At Pathlab18, we bring the lab to your doorstep. Our trained phlebotomists provide
                safe, hygienic home sample collection at your convenience. No more waiting in long queues
                or taking time off work. Book a test, choose your time slot, and get tested in the comfort
                of your home. Same-day reports ensure you get your results quickly when it matters most.
              </Text>
            </View>
          </View>
        </View>

        {/* Join Team Section */}
        <View style={styles.joinSection}>
          <View style={styles.joinContent}>
            {Platform.OS === 'web' ? (
              <iframe
                src="https://www.youtube.com/embed/buJyca9OJwQ"
                style={{
                  width: '100%',
                  height: 300,
                  borderRadius: 8,
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <View style={styles.videoContainer}>
                <WebView
                  style={styles.video}
                  javaScriptEnabled={true}
                  source={{ uri: 'https://www.youtube.com/embed/buJyca9OJwQ' }}
                />
              </View>
            )}
          </View>
        </View>

        {/* Blood Tests Section */}
        <View style={styles.bloodTestsSection}>
          <Text style={styles.sectionTitle}>5 Important Blood Tests After the Age of 35</Text>
          <View style={styles.bloodTestsGrid}>
            <View style={styles.bloodTestCard}>
              <Text style={styles.bloodTestTitle}>1.) Complete Blood Count</Text>
              <Text style={styles.bloodTestText}>
                Monitors red and white blood cell levels to detect anemia, infections, and blood disorders. Essential for assessing overall health and identifying potential medical conditions early.
              </Text>
            </View>
            <View style={styles.bloodTestCard}>
              <Text style={styles.bloodTestTitle}>2.) Blood Sugar</Text>
              <Text style={styles.bloodTestText}>
                Detects diabetes and prediabetes by measuring glucose levels in your blood. Early detection allows for lifestyle changes and treatment to prevent serious complications.
              </Text>
            </View>
            <View style={styles.bloodTestCard}>
              <Text style={styles.bloodTestTitle}>3.) Lipid</Text>
              <Text style={styles.bloodTestText}>
                Measures cholesterol and triglyceride levels to assess cardiovascular risk. High cholesterol can lead to heart disease, making this test critical for heart health monitoring.
              </Text>
            </View>
            <View style={styles.bloodTestCard}>
              <Text style={styles.bloodTestTitle}>4.) Vitamin</Text>
              <Text style={styles.bloodTestText}>
                Checks for deficiencies in essential vitamins like B12, D, and folate that affect energy and bone health. Deficiencies can cause fatigue, weakness, and long-term health issues.
              </Text>
            </View>
            <View style={styles.bloodTestCard}>
              <Text style={styles.bloodTestTitle}>5.) Thyroid Function Test</Text>
              <Text style={styles.bloodTestText}>
                Evaluates thyroid hormone levels to detect conditions like hypothyroidism and hyperthyroidism. Thyroid disorders affect metabolism, energy, and weight management significantly.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowButtonText}>Book Now!</Text>
          </TouchableOpacity>
        </View>

        {/* Chat Section */}
        <View style={styles.chatSection}>
          <TouchableOpacity style={styles.chatButton} onPress={() => navigateToChat('en')}>
            <Text style={styles.chatButtonText}>Chat with our agent now</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <CortisolLogo size={50} color="#ef4444" textColor="#1f2937" />
            <View style={styles.footerLinks}>
              <View style={styles.footerColumn}>
                <Text style={styles.footerColumnTitle}>CONNECT</Text>
                <Text style={styles.footerLink}>Contact</Text>
                <Text style={styles.footerLink}>Chat with our agent now</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.footerChatButton}
              onPress={() => navigateToChat('en')}
            >
              <Text style={styles.footerChatButtonText}>Start Booking</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.copyright}>© 2025 Pathlab18. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1e1b4b',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  navItem: {
    color: '#fff',
    fontSize: 14,
    display: 'none', // Hide on mobile
  },
  navButton: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  hero: {
    backgroundColor: '#1e1b4b',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  heroContent: {
    maxWidth: 600,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 20,
    lineHeight: 50,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 32,
    lineHeight: 24,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 4,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 4,
  },
  secondaryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  quoteSection: {
    backgroundColor: '#ec4899',
    paddingVertical: 40,
    alignItems: 'center',
  },
  quote: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
  },
  purposeSection: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#f9fafb',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 40,
    color: '#1f2937',
  },
  purposeGrid: {
    gap: 24,
  },
  purposeCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
  },
  purposeCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1f2937',
  },
  purposeCardText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#6b7280',
  },
  joinSection: {
    backgroundColor: '#1e1b4b',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  joinContent: {
    gap: 32,
  },
  videoContainer: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
  },
  video: {
    flex: 1,
  },
  joinText: {},
  joinTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 16,
  },
  joinDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 24,
  },
  joinButton: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  chatSection: {
    backgroundColor: '#1e1b4b',
    paddingHorizontal: 20,
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButton: {
    backgroundColor: '#00d9ff',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 4,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  footerContent: {
    gap: 32,
    marginBottom: 24,
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerLogoText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 48,
  },
  footerColumn: {
    gap: 12,
  },
  footerColumnTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
  },
  footerLink: {
    fontSize: 14,
    color: '#6b7280',
  },
  footerChatButton: {
    backgroundColor: '#00d9ff',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  footerChatButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  copyright: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
  bloodTestsSection: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#f9fafb',
  },
  bloodTestsGrid: {
    gap: 24,
  },
  bloodTestCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
  },
  bloodTestTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1f2937',
  },
  bloodTestText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#6b7280',
  },
  bookNowButton: {
    backgroundColor: '#ec4899',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 32,
    alignSelf: 'center',
  },
  bookNowButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
