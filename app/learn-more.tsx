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
import { CortisolLogo } from '../src/components';

export default function LearnMore() {
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
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={styles.backButton}>← Back</Text>
            </TouchableOpacity>
            <CortisolLogo size={50} color="#ef4444" textColor="#fff" />
            <View style={{ width: 60 }} />
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Understanding Health Challenges in Aging</Text>
          <Text style={styles.heroSubtitle}>
            Why Early Detection and Regular Health Monitoring Matter for Indians Over 35
          </Text>
        </View>

        {/* Main Content */}
        <View style={styles.contentSection}>
          {/* Section 1 */}
          <View style={styles.article}>
            <Text style={styles.articleTitle}>The Aging Challenge in India</Text>
            <Text style={styles.articleText}>
              India is experiencing a demographic shift. Our population is aging rapidly—people above 60 years now make up over 10% of India's population, and this number is growing every year. With longer lifespans, we face a new reality: managing health becomes increasingly important as we get older.
            </Text>
            <Text style={styles.articleText}>
              The challenge isn't just living longer—it's living healthier. Many Indians develop chronic diseases silently in their 40s and 50s, often without knowing until significant damage occurs. The good news? Regular health monitoring through blood tests can catch these issues early.
            </Text>
          </View>

          {/* Section 2 */}
          <View style={styles.article}>
            <Text style={styles.articleTitle}>Why Age 35 Matters</Text>
            <Text style={styles.articleText}>
              You might wonder: why should someone in their 30s worry about health? The answer is simple—your lifestyle choices in your 30s and 40s directly impact your health in your 50s and 60s.
            </Text>
            <Text style={styles.articleText}>
              After age 35, our bodies start changing. Metabolism slows down, bone density begins to decrease, and the risk of developing lifestyle diseases increases significantly. This is the perfect time to establish healthy habits and get a baseline understanding of your health through regular blood tests.
            </Text>
          </View>

          {/* Section 3 */}
          <View style={styles.article}>
            <Text style={styles.articleTitle}>Common Health Problems in Aging Indians</Text>
            <Text style={styles.articleSubtitle}>1. Diabetes Epidemic</Text>
            <Text style={styles.articleText}>
              India is called the "Diabetes Capital of the World." Over 77 million Indians have diabetes, and millions more don't know they have it. Type 2 diabetes often develops silently—you might feel fine but your blood sugar is already dangerously high. Regular blood sugar testing can catch this before it causes kidney damage, blindness, or heart problems.
            </Text>

            <Text style={styles.articleSubtitle}>2. Heart Disease</Text>
            <Text style={styles.articleText}>
              Heart disease is the leading cause of death in India. Indians tend to develop heart disease earlier than people in Western countries—often in their 40s and 50s. High cholesterol, high blood pressure, and inflammation are silent killers. A simple lipid profile test can reveal if you're at risk years before a heart attack happens.
            </Text>

            <Text style={styles.articleSubtitle}>3. Anemia and Blood Disorders</Text>
            <Text style={styles.articleText}>
              Particularly common in Indian women, anemia affects energy levels, immunity, and overall health. Many people dismiss fatigue as normal stress, but anemia can be the underlying cause. A Complete Blood Count test reveals this instantly.
            </Text>

            <Text style={styles.articleSubtitle}>4. Vitamin Deficiencies</Text>
            <Text style={styles.articleText}>
              Vitamin B12 and Vitamin D deficiencies are extremely common in India. B12 deficiency causes fatigue and nerve damage, while Vitamin D deficiency affects bone health and immunity. Many people don't realize these simple deficiencies are sabotaging their health.
            </Text>

            <Text style={styles.articleSubtitle}>5. Thyroid Issues</Text>
            <Text style={styles.articleText}>
              Thyroid disorders affect millions of Indians, with women at higher risk. Hypothyroidism (underactive thyroid) causes weight gain, fatigue, and depression. Hyperthyroidism causes anxiety and heart issues. Regular thyroid testing can prevent years of suffering from undiagnosed thyroid problems.
            </Text>
          </View>

          {/* Section 4 */}
          <View style={styles.article}>
            <Text style={styles.articleTitle}>Why Blood Tests Are Your Health Insurance</Text>
            <Text style={styles.articleText}>
              A blood test is like getting a health report card. It tells you exactly what's happening inside your body before symptoms appear. Here's why this matters:
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>Early Detection Saves Lives:</Text> Catching diabetes, high cholesterol, or anemia at stage 1 instead of stage 3 is the difference between taking a few tablets and needing multiple medications or even surgery.
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>Prevention is Cheaper:</Text> A blood test costs a few thousand rupees. A heart bypass surgery costs lakhs. Kidney dialysis costs thousands per month. Prevention is always cheaper than cure.
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>Baseline Knowledge:</Text> Knowing your baseline numbers helps you track changes. If your cholesterol was 150 five years ago and now it's 250, you know something needs to change.
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>Peace of Mind:</Text> If your tests come back normal, you can focus on maintaining your health. If they show problems, you can start treatment before damage occurs.
            </Text>
          </View>

          {/* Section 5 */}
          <View style={styles.article}>
            <Text style={styles.articleTitle}>The Path to Better Health</Text>
            <Text style={styles.articleText}>
              Here's what you should do starting today:
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>1. Get Tested:</Text> If you're over 35, get at least these 5 tests done annually: Complete Blood Count, Blood Sugar, Lipid Profile, Vitamin B12 & D, and Thyroid Function Test.
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>2. Understand Your Numbers:</Text> Don't just ignore the report. Ask your doctor what your numbers mean and what actions you should take.
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>3. Make Lifestyle Changes:</Text> If tests show problems, diet and exercise changes often work better than medications. Your doctor can guide you.
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>4. Follow Up:</Text> Retest after 3-6 months to see if your changes are working. This keeps you motivated.
            </Text>
            <Text style={styles.articleText}>
              <Text style={styles.bold}>5. Make it a Habit:</Text> Just like brushing teeth, annual health checkups should be non-negotiable.
            </Text>
          </View>

          {/* Section 6 */}
          <View style={styles.article}>
            <Text style={styles.articleTitle}>Real Impact in Indian Communities</Text>
            <Text style={styles.articleText}>
              Across India, early blood test screening has changed lives. A 42-year-old IT professional discovered high cholesterol through routine testing and made diet changes—avoiding a heart attack. A 38-year-old homemaker found vitamin B12 deficiency explaining her lifelong fatigue—she's now energetic after supplementation. A 45-year-old businessman caught diabetes early and through lifestyle changes, completely reversed it.
            </Text>
            <Text style={styles.articleText}>
              These stories repeat thousands of times across India. The difference between these people and those suffering from preventable diseases? A simple blood test at the right time.
            </Text>
          </View>

          {/* Section 7 */}
          <View style={styles.article}>
            <Text style={styles.articleTitle}>Your Health Is Your Wealth</Text>
            <Text style={styles.articleText}>
              In India, we save money for our children's education, our homes, and our retirements. But the most important investment is your health. You can't enjoy wealth if you're sick. You can't achieve your dreams if your body fails you.
            </Text>
            <Text style={styles.articleText}>
              The solution isn't complicated. It's not expensive. It's not time-consuming. It's just regular health monitoring through simple blood tests. At Pathlab18, we've made this accessible—affordable, convenient home collection, and quick results so you can take action.
            </Text>
            <Text style={styles.articleText}>
              Don't wait for symptoms to appear. Don't wait for a health crisis. Take control today. Get tested. Know your numbers. Live healthier.
            </Text>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Take Control of Your Health?</Text>
          <TouchableOpacity style={styles.ctaButton} onPress={() => navigateToChat('en')}>
            <Text style={styles.ctaButtonText}>Book Your Health Test Now</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <CortisolLogo size={40} color="#ef4444" textColor="#1f2937" />
            <Text style={styles.footerText}>
              Your health matters. We're here to help you take the first step.
            </Text>
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
  backButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  heroSection: {
    backgroundColor: '#1e1b4b',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 16,
    lineHeight: 44,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 24,
  },
  contentSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  article: {
    marginBottom: 40,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 16,
  },
  articleSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
    marginTop: 20,
    marginBottom: 8,
  },
  articleText: {
    fontSize: 15,
    lineHeight: 26,
    color: '#4b5563',
    marginBottom: 12,
  },
  bold: {
    fontWeight: '700',
    color: '#1f2937',
  },
  ctaSection: {
    backgroundColor: '#ec4899',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 4,
  },
  ctaButtonText: {
    color: '#ec4899',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    alignItems: 'center',
  },
  footerContent: {
    alignItems: 'center',
    marginBottom: 24,
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },
  copyright: {
    fontSize: 12,
    color: '#9ca3af',
    textAlign: 'center',
  },
});
