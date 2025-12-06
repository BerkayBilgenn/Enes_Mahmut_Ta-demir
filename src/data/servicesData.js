import {
  Scale,
  Users,
  Building2,
  Briefcase,
  Shield,
  FileText,
  Gavel,
  Heart,
  Home,
  HandCoins,
  Newspaper,
  Globe,
  UserCheck,
  Landmark,
  BookOpen
} from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    slug: 'yabancilar-ve-vatandaslik',
    title: 'Yabancılar ve Vatandaşlık Hukuku',
    icon: Globe,
    description: 'Vize, oturma izni, çalışma izni ve vatandaşlık başvuruları',
    content: `
      <h3>Yabancılar Hukuku Kapsamında Sunduğumuz Hizmetler</h3>
      <p>Türkiye'de yaşamak, çalışmak veya yatırım yapmak isteyen yabancı uyruklu müvekkillerimize kapsamlı hukuki danışmanlık hizmeti sunmaktayız. Yabancılar hukuku alanındaki derin bilgi birikimimiz ve deneyimimiz ile her türlü başvuru sürecinde yanınızdayız.</p>
      
      <h4>Oturma İzni İşlemleri</h4>
      <p>Kısa dönem, aile, öğrenci, uzun dönem ve insani oturma izni başvuruları konusunda danışmanlık sağlıyoruz. Başvuru dosyasının eksiksiz hazırlanması, gerekli belgelerin temini ve sürecin takibi konularında profesyonel destek sunuyoruz.</p>
      
      <h4>Çalışma İzni ve İstisnai Vatandaşlık</h4>
      <p>Türkiye'de çalışmak isteyen yabancılar için çalışma izni başvurularını yürütüyoruz. Ayrıca yatırım yoluyla vatandaşlık, istisnai vatandaşlık ve evlilik yoluyla vatandaşlık başvurularında müvekkillerimize rehberlik ediyoruz. Türk vatandaşlığının kazanılması için gerekli şartların değerlendirilmesi ve başvuru sürecinin yönetimi konularında uzman kadromuzla hizmetinizdeyiz.</p>
      
      <h4>Deport ve Sınır Dışı Etme Kararlarına İtiraz</h4>
      <p>Hakkında sınır dışı etme kararı verilen yabancıların haklarının korunması, kararlara itiraz edilmesi ve idari yargı süreçlerinin takibi konularında deneyimli hukuki destek sağlıyoruz.</p>
    `
  },
  {
    id: 2,
    slug: 'fikri-mulkiyet',
    title: 'Fikri Mülkiyet Hukuku',
    icon: BookOpen,
    description: 'Patent, marka ve telif hakları koruması',
    content: `
      <h3>Fikri Mülkiyet Haklarınızı Koruma Altına Alıyoruz</h3>
      <p>Yaratıcı emeklerinizin ve ticari değerlerinizin korunması, günümüz rekabetçi iş dünyasında hayati önem taşımaktadır. Fikri mülkiyet hukuku alanındaki uzmanlığımızla, haklarınızın etkin bir şekilde korunmasını sağlıyoruz.</p>
      
      <h4>Marka Tescil ve Koruma</h4>
      <p>Marka tescil başvurularının hazırlanması ve takibi, marka ihlallerine karşı hukuki işlemler, marka lisans ve devir sözleşmelerinin hazırlanması konularında kapsamlı hizmet sunuyoruz. Ulusal ve uluslararası marka tescil süreçlerinde deneyimli ekibimizle yanınızdayız.</p>
      
      <h4>Patent ve Faydalı Model</h4>
      <p>Buluşlarınızın patent veya faydalı model ile korunması için başvuru süreçlerini yönetiyoruz. Patent araştırması, başvuru dosyasının hazırlanması ve tescil sürecinin takibi konularında profesyonel destek sağlıyoruz.</p>
      
      <h4>Telif Hakları ve Tasarım</h4>
      <p>Eser sahipliğinin tespiti, telif hakkı ihlallerine karşı hukuki koruma ve endüstriyel tasarım tescil işlemleri konularında uzman kadromuzla hizmetinizdeyiz. Dijital içerik koruma ve lisanslama sözleşmeleri konusunda da danışmanlık sağlıyoruz.</p>
    `
  },
  {
    id: 3,
    slug: 'sozlesmeler',
    title: 'Sözleşmeler Hukuku',
    icon: FileText,
    description: 'Sözleşme hazırlama, inceleme ve müzakere',
    content: `
      <h3>Profesyonel Sözleşme Danışmanlığı</h3>
      <p>Ticari hayatın temelini oluşturan sözleşmeler, taraflar arasındaki hak ve yükümlülükleri belirleyen kritik belgelerdir. Sözleşme hukuku alanındaki uzmanlığımızla, işletmenizin ve kişisel haklarınızın korunmasını sağlıyoruz.</p>
      
      <h4>Sözleşme Hazırlama ve İnceleme</h4>
      <p>Her türlü ticari ve bireysel sözleşmenin hazırlanması, mevcut sözleşmelerin hukuki açıdan incelenmesi ve risk değerlendirmesi konularında profesyonel destek sağlıyoruz. Satış, kira, franchise, distribütörlük, hizmet ve iş sözleşmeleri başta olmak üzere tüm sözleşme türlerinde deneyimliyiz.</p>
      
      <h4>Sözleşme Müzakereleri</h4>
      <p>Karşı tarafla yürütülecek sözleşme müzakerelerinde müvekkillerimizi temsil ediyoruz. Çıkarlarınızın en iyi şekilde korunması ve dengeli bir anlaşmaya varılması için stratejik danışmanlık sağlıyoruz.</p>
      
      <h4>Uyuşmazlık Çözümü</h4>
      <p>Sözleşmeden kaynaklanan uyuşmazlıklarda arabuluculuk, tahkim ve dava süreçlerinde müvekkillerimizi temsil ediyoruz. Sözleşme ihlali, tazminat talepleri ve fesih işlemlerinde haklarınızı savunuyoruz.</p>
    `
  },
  {
    id: 4,
    slug: 'is-ve-sosyal-guvenlik',
    title: 'İş ve Sosyal Güvenlik Hukuku',
    icon: Users,
    description: 'İşçi-işveren uyuşmazlıkları ve SGK davaları',
    content: `
      <h3>İş Hukuku Alanında Kapsamlı Hizmet</h3>
      <p>İşçi ve işveren arasındaki ilişkilerin hukuki çerçevesini belirleyen iş hukuku, çalışma hayatının en önemli alanlarından biridir. Hem bireysel hem de toplu iş hukuku konularında uzman kadromuzla yanınızdayız.</p>
      
      <h4>İşçi Hakları ve Davalar</h4>
      <p>Haksız fesih, kıdem ve ihbar tazminatı, fazla mesai ücreti, yıllık izin alacakları ve mobbing davalarında işçilerin haklarını savunuyoruz. İşe iade davaları ve iş kazası tazminat davalarında deneyimli ekibimizle profesyonel temsil sağlıyoruz.</p>
      
      <h4>İşveren Danışmanlığı</h4>
      <p>İşverenlere iş sözleşmesi hazırlama, fesih prosedürleri, toplu iş sözleşmesi müzakereleri ve işyeri yönetmelikleri konularında danışmanlık hizmeti sunuyoruz. İşveren tarafını dava süreçlerinde temsil ediyoruz.</p>
      
      <h4>Sosyal Güvenlik İşlemleri</h4>
      <p>SGK prim uyuşmazlıkları, hizmet tespit davaları, emeklilik işlemleri ve iş kazası bildirimleri konularında hukuki destek sağlıyoruz. Kurum işlemleri ve idari başvurular konusunda rehberlik ediyoruz.</p>
    `
  },
  {
    id: 5,
    slug: 'sirketler-ve-ticaret',
    title: 'Şirketler ve Ticaret Hukuku',
    icon: Building2,
    description: 'Şirket kuruluşu, birleşme ve ticari davalar',
    content: `
      <h3>Ticari Hayatınızda Güçlü Hukuki Destek</h3>
      <p>Şirketinizin kuruluşundan günlük operasyonlarına, birleşme ve devralmalardan ticari uyuşmazlıklara kadar her aşamada profesyonel hukuki danışmanlık sunuyoruz.</p>
      
      <h4>Şirket Kuruluş ve Yapılandırma</h4>
      <p>Limited, anonim, kollektif ve komandit şirket kuruluşları, şube ve irtibat bürosu açılışları, şirket türü değişiklikleri ve tasfiye işlemlerinde hukuki destek sağlıyoruz. En uygun şirket yapısının belirlenmesi konusunda stratejik danışmanlık sunuyoruz.</p>
      
      <h4>Birleşme, Devralma ve Ortaklık</h4>
      <p>Şirket birleşmeleri, bölünmeleri ve devralmaları konusunda due diligence çalışmaları, sözleşme hazırlığı ve süreç yönetimi hizmetleri sunuyoruz. Ortaklık anlaşmazlıkları ve hisse devir işlemlerinde müvekkillerimizi temsil ediyoruz.</p>
      
      <h4>Ticari Uyuşmazlıklar</h4>
      <p>Ticari alacak davaları, haksız rekabet, marka ihlalleri ve distribütörlük uyuşmazlıklarında dava ve arabuluculuk süreçlerinde deneyimli temsil sağlıyoruz.</p>
    `
  },
  {
    id: 6,
    slug: 'rekabet',
    title: 'Rekabet Hukuku',
    icon: Scale,
    description: 'Rekabet ihlalleri ve pazar araştırmaları',
    content: `
      <h3>Rekabet Hukuku Danışmanlığı</h3>
      <p>Serbest piyasa ekonomisinin temelini oluşturan rekabet kuralları, işletmelerin pazar davranışlarını düzenlemektedir. Rekabet hukuku alanındaki uzmanlığımızla, işletmenizin uyum süreçlerini yönetiyoruz.</p>
      
      <h4>Rekabet Uyum Programları</h4>
      <p>İşletmenizin rekabet kurallarına uyumunu sağlamak için kapsamlı uyum programları hazırlıyoruz. Çalışan eğitimleri, iç denetim sistemleri ve risk değerlendirmesi konularında danışmanlık sağlıyoruz.</p>
      
      <h4>Rekabet Kurumu Süreçleri</h4>
      <p>Rekabet Kurumu soruşturma ve incelemelerinde müvekkillerimizi temsil ediyoruz. Birleşme ve devralma bildirimlerinin hazırlanması, menfi tespit ve muafiyet başvuruları konularında uzman destek sunuyoruz.</p>
      
      <h4>Haksız Rekabet Davaları</h4>
      <p>Rakipler tarafından yapılan haksız rekabet eylemlerine karşı hukuki koruma sağlıyoruz. Ticari sırların korunması, kötüleme ve aldatıcı reklamlar konularında dava süreçlerini yönetiyoruz.</p>
    `
  },
  {
    id: 7,
    slug: 'basin-ve-medya',
    title: 'Basın ve Medya Hukuku',
    icon: Newspaper,
    description: 'Yayın hakları ve basın özgürlüğü davaları',
    content: `
      <h3>Basın ve Medya Sektörüne Özel Hukuki Destek</h3>
      <p>Medya kuruluşları, gazeteciler ve içerik üreticileri için özelleşmiş hukuki danışmanlık hizmeti sunuyoruz. Basın özgürlüğü ve sorumluluk dengesinin korunmasında yanınızdayız.</p>
      
      <h4>Yayın Hakları ve Sözleşmeler</h4>
      <p>Yayın hakları sözleşmeleri, telif lisansları, sponsorluk anlaşmaları ve içerik dağıtım sözleşmelerinin hazırlanması ve müzakeresi konularında hizmet sunuyoruz.</p>
      
      <h4>Kişilik Hakları ve İtibar</h4>
      <p>Basın yoluyla kişilik haklarının ihlali davalarında hem medya kuruluşlarını hem de mağdur olan bireyleri temsil ediyoruz. Cevap ve düzeltme hakkı, tazminat davaları ve içerik kaldırma süreçlerini yönetiyoruz.</p>
      
      <h4>RTÜK ve Düzenleyici Süreçler</h4>
      <p>RTÜK cezalarına itiraz, yayın lisansı başvuruları ve düzenleyici uyum konularında profesyonel destek sağlıyoruz. İnternet yayıncılığı ve sosyal medya hukuku konularında güncel danışmanlık sunuyoruz.</p>
    `
  },
  {
    id: 8,
    slug: 'tuketici',
    title: 'Tüketici Hukuku',
    icon: HandCoins,
    description: 'Tüketici hakları ve ayıplı ürün davaları',
    content: `
      <h3>Tüketici Haklarınızı Koruyoruz</h3>
      <p>Tüketici olarak sahip olduğunuz hakların korunması ve ihlal durumunda etkin hukuki çözümler sunmak için çalışıyoruz. Bireysel tüketiciler ve tüketici örgütleri için danışmanlık hizmeti veriyoruz.</p>
      
      <h4>Ayıplı Mal ve Hizmet</h4>
      <p>Satın aldığınız ürün veya hizmetteki ayıplar nedeniyle doğan haklarınızın takibi konusunda destek sağlıyoruz. Ücretsiz onarım, ürün değişimi, bedel iadesi ve tazminat taleplerinde müvekkillerimizi temsil ediyoruz.</p>
      
      <h4>Tüketici Kredileri ve Bankacılık</h4>
      <p>Tüketici kredileri, kredi kartları, mortgage ve bireysel bankacılık işlemlerinden kaynaklanan uyuşmazlıklarda hukuki destek sunuyoruz. Haksız masraf ve faiz iadesi davalarını takip ediyoruz.</p>
      
      <h4>Tüketici Hakem Heyetleri</h4>
      <p>Tüketici hakem heyetlerine yapılacak başvuruların hazırlanması ve süreç takibi konularında yardımcı oluyoruz. Hakem heyeti kararlarına itiraz ve dava süreçlerini yönetiyoruz.</p>
    `
  },
  {
    id: 9,
    slug: 'ceza-ve-infaz',
    title: 'Ceza ve İnfaz Hukuku',
    icon: Gavel,
    description: 'Ceza davaları ve infaz hukuku',
    content: `
      <h3>Ceza Davalarında Profesyonel Savunma</h3>
      <p>Ceza hukuku alanında şüpheli, sanık veya mağdur müvekkillerimize en üst düzeyde hukuki temsil sunuyoruz. Soruşturma aşamasından infaz sürecine kadar her aşamada yanınızdayız.</p>
      
      <h4>Soruşturma ve Kovuşturma</h4>
      <p>Gözaltı ve tutukluluk işlemlerinde acil müdahale, savcılık ifadelerinde hazır bulunma, delil toplanması ve itiraz süreçlerinde profesyonel savunma sağlıyoruz. Her türlü suç tipinde deneyimli ekibimizle savunmanızı üstleniyoruz.</p>
      
      <h4>Temyiz ve Olağanüstü Kanun Yolları</h4>
      <p>Mahkumiyet kararlarına karşı istinaf ve temyiz başvuruları, bireysel başvuru ve yargılamanın yenilenmesi süreçlerinde müvekkillerimizi temsil ediyoruz.</p>
      
      <h4>İnfaz ve Ceza İndirimi</h4>
      <p>Koşullu salıverilme, denetimli serbestlik, ceza erteleme ve hapis cezasının seçenek yaptırımlara çevrilmesi konularında hukuki destek sunuyoruz. Cezaevi koşullarının iyileştirilmesi için başvurular yapıyoruz.</p>
    `
  },
  {
    id: 10,
    slug: 'insan-haklari',
    title: 'İnsan Hakları Hukuku',
    icon: Heart,
    description: 'AİHM başvuruları ve temel hak ihlalleri',
    content: `
      <h3>Temel Hak ve Özgürlüklerinizin Savunucusu</h3>
      <p>İnsan hakları ihlalleri karşısında ulusal ve uluslararası mekanizmalarda haklarınızı savunuyoruz. Avrupa İnsan Hakları Mahkemesi başvuruları konusunda uzman ekibimizle yanınızdayız.</p>
      
      <h4>Avrupa İnsan Hakları Mahkemesi</h4>
      <p>İç hukuk yollarının tüketilmesinin ardından AİHM'e yapılacak bireysel başvuruların hazırlanması ve takibi konusunda deneyimli hukuki destek sağlıyoruz. Başvuru şartlarının değerlendirilmesi, dava dosyasının hazırlanması ve duruşmalarda temsil konularında hizmet sunuyoruz.</p>
      
      <h4>Anayasa Mahkemesi Bireysel Başvuru</h4>
      <p>Temel hak ihlalleri nedeniyle Anayasa Mahkemesi'ne yapılacak bireysel başvuruların hazırlanması ve takibi konusunda profesyonel destek sağlıyoruz.</p>
      
      <h4>İfade, Toplanma ve Örgütlenme Özgürlüğü</h4>
      <p>Temel özgürlüklerin kısıtlanması durumlarında hukuki mücadele yürütüyoruz. Basın özgürlüğü, akademik özgürlük ve sivil toplum hakları konularında danışmanlık sağlıyoruz.</p>
    `
  },
  {
    id: 11,
    slug: 'idare-ve-vergi',
    title: 'İdare ve Vergi Hukuku',
    icon: Landmark,
    description: 'İdari davalar ve vergi uyuşmazlıkları',
    content: `
      <h3>İdare ile İlişkilerinizde Profesyonel Destek</h3>
      <p>Kamu kurumları ile olan ilişkilerinizde ve vergi uyuşmazlıklarında haklarınızı koruyoruz. İdari işlemlere karşı etkili hukuki çözümler sunuyoruz.</p>
      
      <h4>İdari Davalar</h4>
      <p>İdari işlemlerin iptali, tam yargı davaları, kamu ihaleleri uyuşmazlıkları ve imar hukuku konularında deneyimli temsil sağlıyoruz. İdarenin tek taraflı işlemlerine karşı haklarınızı savunuyoruz.</p>
      
      <h4>Vergi Uyuşmazlıkları</h4>
      <p>Vergi tarhiyatlarına itiraz, vergi cezalarının iptali, vergi affı uygulamaları ve vergi planlaması konularında danışmanlık hizmeti sunuyoruz. Vergi dairesi ve vergi mahkemeleri nezdinde müvekkillerimizi temsil ediyoruz.</p>
      
      <h4>Kamulaştırma ve İmar</h4>
      <p>Kamulaştırma bedeline itiraz, imar planı değişikliklerine karşı davalar ve yapı ruhsatı uyuşmazlıklarında hukuki destek sağlıyoruz. Mülkiyet hakkının korunması için etkin mücadele veriyoruz.</p>
    `
  },
  {
    id: 12,
    slug: 'dernekler-ve-vakiflar',
    title: 'Dernekler ve Vakıflar Hukuku',
    icon: UserCheck,
    description: 'STK kuruluşu ve yönetim danışmanlığı',
    content: `
      <h3>Sivil Toplum Kuruluşlarına Özel Hizmet</h3>
      <p>Dernek ve vakıfların kuruluşundan günlük operasyonlarına kadar tüm hukuki ihtiyaçlarına yönelik kapsamlı danışmanlık hizmeti sunuyoruz.</p>
      
      <h4>Kuruluş ve Tescil</h4>
      <p>Dernek ve vakıf kuruluş işlemleri, tüzük ve senedi hazırlama, izin ve tescil süreçlerinin yönetimi konularında destek sağlıyoruz. Uluslararası kuruluşların Türkiye temsilciliklerinin açılmasında da hizmet veriyoruz.</p>
      
      <h4>Yönetim ve Uyum</h4>
      <p>Genel kurul toplantıları, yönetim kurulu kararları, üyelik işlemleri ve mevzuata uyum konularında danışmanlık sağlıyoruz. Dernekler Masası ve Vakıflar Genel Müdürlüğü ile ilişkilerin yönetiminde yardımcı oluyoruz.</p>
      
      <h4>Bağış ve Yardım Kampanyaları</h4>
      <p>Bağış toplama izinleri, vergi muafiyeti başvuruları ve uluslararası fon kullanımı konularında hukuki destek sunuyoruz. Şeffaflık ve hesap verebilirlik standartlarının sağlanmasında rehberlik ediyoruz.</p>
    `
  },
  {
    id: 13,
    slug: 'gayrimenkul',
    title: 'Gayrimenkul Hukuku',
    icon: Home,
    description: 'Tapu işlemleri ve kira uyuşmazlıkları',
    content: `
      <h3>Gayrimenkul İşlemlerinizde Güvenilir Ortak</h3>
      <p>Gayrimenkul alım-satımından kira uyuşmazlıklarına, kat mülkiyetinden imar sorunlarına kadar her alanda profesyonel hukuki destek sunuyoruz.</p>
      
      <h4>Alım-Satım ve Tapu İşlemleri</h4>
      <p>Gayrimenkul alım-satım sözleşmelerinin hazırlanması, tapu sicil araştırması, ipotek ve irtifak hakları konularında danışmanlık sağlıyoruz. Due diligence çalışmaları ve risk değerlendirmesi yapıyoruz.</p>
      
      <h4>Kira Hukuku</h4>
      <p>Konut ve işyeri kira sözleşmeleri, kira tespit davaları, tahliye davaları ve kira alacağı takibi konularında hem kiracı hem de kiraya veren tarafı temsil ediyoruz.</p>
      
      <h4>Kat Mülkiyeti ve Site Yönetimi</h4>
      <p>Kat mülkiyeti kanunundan kaynaklanan uyuşmazlıklar, site yönetimi sorunları, ortak alan kullanımı ve aidat alacakları konularında hukuki destek sağlıyoruz.</p>
    `
  },
  {
    id: 14,
    slug: 'aile',
    title: 'Aile Hukuku',
    icon: Heart,
    description: 'Boşanma, velayet ve nafaka davaları',
    content: `
      <h3>Aile Hukuku Davalarında Hassas Yaklaşım</h3>
      <p>Aile hukuku davaları, duygusal açıdan en zorlu süreçlerden biridir. Müvekkillerimize hem hukuki hem de insani açıdan destek sağlayarak bu süreci en az hasarla atlatmalarını hedefliyoruz.</p>
      
      <h4>Boşanma Davaları</h4>
      <p>Anlaşmalı ve çekişmeli boşanma davalarında müvekkillerimizi temsil ediyoruz. Mal paylaşımı, tazminat talepleri ve nafaka konularında haklarınızı koruyoruz. Boşanma protokollerinin hazırlanmasında danışmanlık sağlıyoruz.</p>
      
      <h4>Velayet ve Kişisel İlişki</h4>
      <p>Çocuk velayeti davaları, kişisel ilişki düzenlenmesi ve velayet değişikliği taleplerinde çocuğun üstün yararını ön planda tutarak müvekkillerimizi temsil ediyoruz.</p>
      
      <h4>Nafaka ve Mal Rejimi</h4>
      <p>Tedbir nafakası, iştirak nafakası ve yoksulluk nafakası talepleri ile mal rejimi tasfiyesi davalarında deneyimli temsil sağlıyoruz. Aile konutu şerhi ve ziynet eşyası davalarını takip ediyoruz.</p>
    `
  },
  {
    id: 15,
    slug: 'icra-ve-iflas',
    title: 'İcra ve İflas Hukuku',
    icon: Briefcase,
    description: 'Alacak takibi ve iflas işlemleri',
    content: `
      <h3>Alacaklarınızın Etkin Takibi</h3>
      <p>Alacaklarınızın tahsili için en etkili yasal yolları kullanıyoruz. Borçlu müvekkillerimizin haklarını da koruyarak dengeli bir yaklaşım sergiliyoruz.</p>
      
      <h4>İcra Takibi</h4>
      <p>İlamlı ve ilamsız icra takipleri, kambiyo senetlerine özgü takipler, rehnin paraya çevrilmesi ve ipotek takipleri konularında profesyonel hizmet sunuyoruz. Takip sürecinin her aşamasında aktif rol alıyoruz.</p>
      
      <h4>Haciz ve Satış İşlemleri</h4>
      <p>Haciz işlemlerinin uygulanması, mahcuz malların satışı ve paraların paylaştırılması süreçlerini yönetiyoruz. İstihkak davaları ve şikayet yollarını etkin bir şekilde kullanıyoruz.</p>
      
      <h4>İflas ve Konkordato</h4>
      <p>İflas erteleme, konkordato başvuruları ve yeniden yapılandırma süreçlerinde şirketlere danışmanlık sağlıyoruz. Alacaklı sıfatıyla iflas masasına katılım ve alacağın tahsili işlemlerini yürütüyoruz.</p>
    `
  },
  {
    id: 16,
    slug: 'tazminat',
    title: 'Tazminat Hukuku',
    icon: Shield,
    description: 'Maddi ve manevi tazminat davaları',
    content: `
      <h3>Haklarınız İçin Tazminat Mücadelesi</h3>
      <p>Uğradığınız zararların tazmini için güçlü bir hukuki mücadele yürütüyoruz. Maddi ve manevi her türlü zararınızın en yüksek düzeyde tazmin edilmesini hedefliyoruz.</p>
      
      <h4>Trafik Kazası Tazminatları</h4>
      <p>Trafik kazalarından kaynaklanan ölüm, yaralanma ve maddi hasar tazminatı davalarında uzman temsil sağlıyoruz. Sigorta şirketleri ile müzakere ve dava süreçlerini yönetiyoruz.</p>
      
      <h4>İş Kazası ve Meslek Hastalığı</h4>
      <p>İş kazaları ve meslek hastalıklarından kaynaklanan tazminat davalarında işçileri temsil ediyoruz. İşverenin kusur sorumluluğu ve SGK rücu davaları konularında deneyimliyiz.</p>
      
      <h4>Haksız Fiil ve Sorumluluk</h4>
      <p>Her türlü haksız fiilden kaynaklanan tazminat talepleri, ürün sorumluluğu davaları ve maluliyet tazminatı konularında hukuki destek sağlıyoruz. Uzlaşma ve dava süreçlerini en etkili şekilde yönetiyoruz.</p>
    `
  }
];

export default servicesData;
