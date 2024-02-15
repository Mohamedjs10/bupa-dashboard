export const intro = (
  name = ' سهير جورج رياض كامل',
  gender = 'السيدة',
  amount = '1,500,000.00',
  currency = 'إسترليني'
) => `عناية ${gender}/ ${name}
  
  يمثل هذا المستند وثيقة التأمين الخاصة بك والذي يمنحك نبذة مختصرة عن خطتك التأمينية. يمكنك اإلطالع على كافة التفاصيل 
  المتعلقة بالمزايا والحدود واالستثناءات المطبقة على خطة التأمين الخاصة بك في كتيب المزايا واالستثناءات. 
  
  نؤكد بموجب هذه الوثيقة أن األشخاص المذكورين أدناه عمالء بخطة بوبا إيجيبت للتأمين الطبي. تغطي الخطة التأمينية تكاليف 
  ستحق متضمنا ${amount} جنية ً العالج الم تكاليف اإلقامة في المستشفى وتكاليف العالج الفعال بحد سنوي أقصى قدره
  ${currency} في )التغطية العالمية بأستثناء الواليات المتحدة االمريكية ) . 
  برجاء مالحظة أن هناك بعض المزايا التي تطبق عليها الحدود الجزئية. 
  
  
  وتفضلوا بقبول وافر االحترام، 
  
  
  بوبا إيجيبت للتأمين`;

export const tableDescriptionPrefix = (gender = 'male') => `البيانات الخاصة ${gender === 'male' ? 'بالسيد/' : 'بالسيدة/'}`;

export const tableDescription = (
  name = 'سهير جورج رياض كامل',
  membershipNumber = 'BBBBBBBBBBB',
  birthDate = '05/09/1960',
  country = 'مصر'
) => ` ${name} ، رقم عضوية ${membershipNumber}
    تاريخ الميلاد ${birthDate} ، محل الإقامة/${country}`;

export const contractInfoPrefix = () => `معلومات العقد`;
export const contractInfo = () => `تتولى شركة بوبا إيجيبت للتأمين توفير التغطية التأمينية لخطة التأمين الخاصة بك.`;

export const lastSectionP1 = () =>
  'يمكنك االطالع والحصول على نسخة من دليل حماية المتعاملين المصدر من قبل الهيئة العامة للرقابة المالية عن طريق التواصل مع فريق خدمة العمالء لدينا أو زيارة موقع الهيئة العامة للرقابة المالية على';
export const lastSectionP2 = () => 'لتحميل نسخة من الدليل.';
