
     
    document.addEventListener('DOMContentLoaded', function() {
    const homePage = document.getElementById('home-page');
    const messagesPage = document.getElementById('messages-page');
    const addVideoPage = document.getElementById('add-video-page');
    const profilePage = document.getElementById('profile-page');

    document.getElementById('home').addEventListener('click', function() {
        showPage(homePage);
    });

    document.getElementById('messages').addEventListener('click', function() {
        showPage(messagesPage);
    });

    document.getElementById('add-video').addEventListener('click', function() {
        showPage(addVideoPage);
    });

    document.getElementById('profile').addEventListener('click', function() {
        showPage(profilePage);
    });

    function showPage(page) {
        homePage.classList.remove('active');
        messagesPage.classList.remove('active');
        addVideoPage.classList.remove('active');
        profilePage.classList.remove('active');
        page.classList.add('active');
    }
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // تحقق من بيانات المستخدم وأعد الاستجابة
    res.send('تم تسجيل الدخول بنجاح');
});

app.post('/register', (req, res) => {
    const { email, password, phone } = req.body;
    // سجل المستخدم الجديد وأعد الاستجابة
    res.send('تم التسجيل بنجاح');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>مرحبًا بك في تطبيق السوشيال ميديا</Text>
      <Button title="الصفحة الرئيسية" onPress={() => alert('الصفحة الرئيسية')} />
      <Button title="الرسائل" onPress={() => alert('الرسائل')} />
      <Button title="➕" onPress={() => alert('إضافة فيديو')} />
      <Button title="الملف الشخصي" onPress={() => alert('الملف الشخصي')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function showUsageDuration(dailyUsage, totalUsage) {
    document.getElementById('daily-usage').textContent = `${dailyUsage} ساعة`;
    document.getElementById('total-usage').textContent = `${totalUsage} ساعة`;
}

// Call this function with real data
showUsageDuration(2, 150);
function clearCache() {
    // Functionality to clear cache
    alert('تم حذف ذاكرة التخزين المؤقت');
}

function clearAllData() {
    // Functionality to clear all data
    alert('تم حذف الذاكرة بالكامل');
}

function showUsedSpace(usedSpace) {
    document.getElementById('used-space').textContent = `${usedSpace} MB`;
}

// Call this function with real data
showUsedSpace(500);
function toggleDataSaving() {
    const isEnabled = document.getElementById('data-saving-toggle').checked;
    alert(isEnabled ? 'تم تفعيل توفير البيانات' : 'تم إيقاف توفير البيانات');
}
function reportProblem() {
    const email = 'support@example.com';
    const subject = 'الإبلاغ عن مشكلة في التطبيق';
    const body = 'يرجى وصف المشكلة التي تواجهها هنا...';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function contactSupport() {
    alert('سيتم الاتصال بفريق الدعم مباشرة...');
    // Implement real-time chat functionality here
}
function getTranslatedTerms() {
    const terms = `
        <h3>Terms and Policies for Live Broadcasts</h3>
        <ol>
            <li>Prohibition of Smoking:
                <ul>
                    <li>Smoking of any kind, including but not limited to cigarettes, cigars, e-cigarettes, and vaping devices, is strictly prohibited during live broadcasts.</li>
                    <li>Any user found violating this policy will receive an immediate warning. Repeated violations may result in suspension or permanent banning from the platform.</li>
                </ul>
            </li>
            <li>Alcohol Consumption:
                <ul>
                    <li>Consumption of alcoholic beverages during live broadcasts is strictly forbidden.</li>
                    <li>Displaying, promoting, or encouraging the consumption of alcohol during broadcasts will result in immediate disciplinary action, including temporary or permanent account suspension.</li>
                </ul>
            </li>
            <li>Use of Offensive Language:
                <ul>
                    <li>Use of offensive, obscene, or derogatory language is not permitted. This includes but is not limited to swearing, racial slurs, and sexually explicit language.</li>
                    <li>Any instance of offensive language will be met with a warning, and repeated offenses may lead to stricter penalties, including suspension or permanent banning.</li>
                </ul>
            </li>
            <li>Inappropriate Comments:
                <ul>
                    <li>Comments that are offensive, disrespectful, or harmful towards any individual or group are prohibited. This includes, but is not limited to:
                        <ul>
                            <li>Personal insults and harassment.</li>
                            <li>Hate speech based on race, ethnicity, national origin, gender, sexual orientation, religious beliefs, or disability.</li>
                            <li>Threats of violence or any form of intimidation.</li>
                        </ul>
                    </li>
                    <li>Moderators will remove any comments deemed inappropriate, and users posting such comments may face penalties including warnings, suspensions, or bans.</li>
                </ul>
            </li>
            <li>Respect for Privacy:
                <ul>
                    <li>Users must respect the privacy of others and refrain from sharing personal information without consent. This includes addresses, phone numbers, email addresses, and any other private details.</li>
                    <li>Violations of privacy will be treated seriously, with possible legal implications and account termination.</li>
                </ul>
            </li>
            <li>Respect for Intellectual Property:
                <ul>
                    <li>Users are prohibited from sharing or broadcasting content that infringes on intellectual property rights, including music, videos, images, and written material.</li>
                    <li>Any infringement will result in immediate content removal and possible legal action, as well as suspension or banning of the user’s account.</li>
                </ul>
            </li>
            <li>Ban on Promotion of Illegal Activities:
                <ul>
                    <li>Promoting, advocating, or discussing illegal activities is strictly forbidden. This includes drug use, underage drinking, and other unlawful behaviors.</li>
                    <li>Violators will face severe consequences, including immediate suspension and potential reporting to relevant authorities.</li>
                </ul>
            </li>
            <li>Maintaining a Safe and Positive Environment:
                <ul>
                    <li>Users are expected to contribute to a safe, respectful, and positive environment. This includes avoiding any behavior that could be seen as bullying, trolling, or harassment.</li>
                    <li>Persistent negative behavior will result in warnings and may lead to account restrictions or termination.</li>
                </ul>
            </li>
            <li>Reporting Violations:
                <ul>
                    <li>Users are encouraged to report any violations of these policies. All reports will be taken seriously and investigated promptly.</li>
                    <li>Reporting false information maliciously will not be tolerated and may result in penalties for the reporting user.</li>
                </ul>
            </li>
            <li>Compliance with Platform Rules:
                <ul>
                    <li>Users must comply with all other rules and guidelines set forth by the platform. This includes adherence to age restrictions, content guidelines, and community standards.</li>
                    <li>Failure to comply may result in disciplinary actions, including content removal, suspension, or banning.</li>
                </ul>
            </li>
            <li>Changes to Policies:
                <ul>
                    <li>The platform reserves the right to update or change these policies at any time. Users will be notified of any significant changes.</li>
                    <li>Continued use of the platform signifies acceptance of any updates to these terms and policies.</li>
                </ul>
            </li>
        </ol>
        <p>By adhering to these policies, we aim to create a respectful, safe, and enjoyable environment for all users. Thank you for your cooperation.</p>
    `;
    document.getElementById('translated-terms').innerHTML = terms;
}

// Call this function on page load or when terms need to be shown
getTranslatedTerms();
function showAccounts(accounts) {
    const accountList = document.getElementById('account-list');
    accountList.innerHTML = '';
    accounts.forEach(account => {
        const listItem = document.createElement('li');
        listItem.textContent = account;
        listItem
function toggleFeature(featureId, message) {
    const isEnabled = document.getElementById(featureId).checked;
    alert(isEnabled ? `تم تفعيل ${message}` : `تم إيقاف ${message}`);
}

document.getElementById('private-account-toggle').addEventListener('change', () => toggleFeature('private-account-toggle', 'الحساب الخاص'));
document.getElementById('activity-status-toggle').addEventListener('change', () => toggleFeature('activity-status-toggle', 'حالة النشاط'));
document.getElementById('suggest-account-toggle').addEventListener('change', () => toggleFeature('suggest-account-toggle', 'اقتراح الحساب'));
document.getElementById('sync-contacts-toggle').addEventListener('change', () => toggleFeature('sync-contacts-toggle', 'مزامنة جهات الاتصال وأصدقاء الفيسبوك'));
document.getElementById('location-services-toggle').addEventListener('change', () => toggleFeature('location-services-toggle', 'خدمات الموقع'));
document.getElementById('comments-toggle').addEventListener('change', () => toggleFeature('comments-toggle', 'التعليقات'));
document.getElementById('mentions-tags-toggle').addEventListener('change', () => toggleFeature('mentions-tags-toggle', 'الذِكر والإشارات'));
document.getElementById('private-messages-toggle').addEventListener('change', () => toggleFeature('private-messages-toggle', 'الرسائل الخاصة'));
document.getElementById('story-toggle').addEventListener('change', () => toggleFeature('story-toggle', 'قصة'));
document.getElementById('duet-toggle').addEventListener('change', () => toggleFeature('duet-toggle', 'دويتو'));
document.getElementById('merge-toggle').addEventListener('change', () => toggleFeature('merge-toggle', 'الدمج'));
document.getElementById('stickers-toggle').addEventListener('change', () => toggleFeature('stickers-toggle', 'ملصقات'));
document.getElementById('following-list-toggle').addEventListener('change', () => toggleFeature('following-list-toggle', 'قائمة المتابعة'));
document.getElementById('liked-videos-toggle').addEventListener('change', () => toggleFeature('liked-videos-toggle', 'فيديوهات اعجبتك'));
document.getElementById('favorite-sounds-toggle').addEventListener('change', () => toggleFeature('favorite-sounds-toggle', 'الأصوات المفضلة'));
document.getElementById('post-views-toggle').addEventListener('change', () => toggleFeature('post-views-toggle', 'مشاهدات المنشورات'));
document.getElementById('profile-visits-toggle').addEventListener('change', () => toggleFeature('profile-visits-toggle', 'زيارات الملف الشخصي'));
document.getElementById('blocked-accounts-toggle').addEventListener('change', () => toggleFeature('blocked-accounts-toggle', 'الحسابات المحضورة'));
function toggleSecurityPermission(featureId, message) {
    const isEnabled = document.getElementById(featureId).checked;
    alert(isEnabled ? `تم تفعيل ${message}` : `تم إيقاف ${message}`);
}

document.getElementById('two-factor-auth-toggle').addEventListener('change', ()
