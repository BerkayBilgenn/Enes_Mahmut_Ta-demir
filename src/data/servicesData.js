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
    image: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Yabancılar Hukuku Kapsamında Sunduğumuz Hizmetler</h3>
      <p>Türkiye'de yaşamak, çalışmak veya yatırım yapmak isteyen yabancı uyruklu müvekkillerimize kapsamlı hukuki danışmanlık hizmeti sunmaktayız. Yabancılar hukuku alanındaki derin bilgi birikimimiz ve deneyimimiz ile her türlü başvuru sürecinde yanınızdayız. Göç ve vatandaşlık işlemlerinde karşılaşılan bürokratik süreçlerin karmaşıklığı, profesyonel hukuki destek almayı zorunlu kılmaktadır.</p>
      
      <h3>Oturma İzni İşlemleri</h3>
      <p>Türkiye'de kalış sürenizi yasal zemine oturtmak için çeşitli oturma izni seçenekleri bulunmaktadır. Kısa dönem oturma izni, aile oturma izni, öğrenci oturma izni, uzun dönem oturma izni ve insani oturma izni başvuruları konusunda detaylı danışmanlık sağlıyoruz.</p>
      <ul>
        <li><strong>Kısa Dönem Oturma İzni:</strong> Turistik, ticari veya eğitim amaçlı kısa süreli kalışlar için ideal seçenek</li>
        <li><strong>Aile Oturma İzni:</strong> Türk vatandaşı veya oturma izni sahibi yabancı ile evli olanlar için</li>
        <li><strong>Öğrenci Oturma İzni:</strong> Türkiye'de eğitim görecek yabancı öğrenciler için</li>
        <li><strong>Uzun Dönem Oturma İzni:</strong> En az 8 yıl kesintisiz ikamet edenler için süresiz ikamet hakkı</li>
        <li><strong>İnsani Oturma İzni:</strong> Özel durumlar ve insani nedenlerle verilen izin türü</li>
      </ul>
      
      <h3>Çalışma İzni ve İstisnai Vatandaşlık</h3>
      <p>Türkiye'de çalışmak isteyen yabancılar için çalışma izni başvurularını yürütüyoruz. Çalışma izni almak için işveren başvurusu, bağımsız çalışma izni ve istisnai çalışma izni gibi farklı prosedürler mevcuttur. Ayrıca yatırım yoluyla vatandaşlık programı kapsamında:</p>
      <ul>
        <li>En az 400.000 USD değerinde gayrimenkul yatırımı</li>
        <li>En az 500.000 USD sermaye yatırımı</li>
        <li>En az 50 kişiye istihdam sağlama</li>
        <li>En az 500.000 USD tutarında mevduat hesabı</li>
      </ul>
      <p>şartlarından birini karşılayan yabancılara Türk vatandaşlığı kazanma imkanı sunulmaktadır. Bu süreçlerde dosya hazırlığından onay aşamasına kadar profesyonel destek sağlıyoruz.</p>
      
      <h3>Deport ve Sınır Dışı Etme Kararlarına İtiraz</h3>
      <p>Hakkında sınır dışı etme kararı verilen yabancıların haklarının korunması, kararlara itiraz edilmesi ve idari yargı süreçlerinin takibi konularında deneyimli hukuki destek sağlıyoruz. Geri gönderme merkezlerindeki müvekkillerimize acil hukuki yardım sunarak, temel haklarının korunmasını sağlıyoruz.</p>
    `
  },
  {
    id: 2,
    slug: 'fikri-mulkiyet',
    title: 'Fikri Mülkiyet Hukuku',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Fikri Mülkiyet Haklarınızı Koruma Altına Alıyoruz</h3>
      <p>Yaratıcı emeklerinizin ve ticari değerlerinizin korunması, günümüz rekabetçi iş dünyasında hayati önem taşımaktadır. Fikri mülkiyet hukuku alanındaki uzmanlığımızla, haklarınızın etkin bir şekilde korunmasını sağlıyoruz. Markanızdan patentinize, tasarımlarınızdan telif haklarınıza kadar tüm fikri varlıklarınız güvence altındadır.</p>
      
      <h3>Marka Tescil ve Koruma</h3>
      <p>Marka, işletmenizin en değerli varlıklarından biridir. Marka tescili ile rakiplerinizden farklılaşır ve tüketici güveni kazanırsınız.</p>
      <ul>
        <li><strong>Marka Araştırması:</strong> Tescil öncesi benzer marka taraması ve risk analizi</li>
        <li><strong>Ulusal Marka Tescili:</strong> Türk Patent ve Marka Kurumu nezdinde başvuru</li>
        <li><strong>Uluslararası Marka Tescili:</strong> Madrid Protokolü kapsamında çoklu ülke başvurusu</li>
        <li><strong>Marka İhlali Davaları:</strong> Taklit ve kopya ürünlere karşı hukuki mücadele</li>
        <li><strong>Marka Lisans ve Devir:</strong> Ticari sözleşmelerin hazırlanması</li>
      </ul>
      
      <h3>Patent ve Faydalı Model</h3>
      <p>Buluşlarınızın korunması, Ar-Ge yatırımlarınızın geri dönüşü açısından kritik öneme sahiptir. Patent koruması 20 yıl, faydalı model koruması ise 10 yıl süreyle buluşunuza tekel hakkı sağlar.</p>
      <ul>
        <li>Patent araştırması ve patentlenebilirlik değerlendirmesi</li>
        <li>Patent başvuru dosyasının hazırlanması</li>
        <li>Patent Cooperation Treaty (PCT) başvuruları</li>
        <li>Patent ihlali davaları ve lisanslama</li>
      </ul>
      
      <h3>Telif Hakları ve Tasarım</h3>
      <p>Estetik değer taşıyan özgün çalışmalarınız, eser sahipliği tespit davası ile koruma altına alınabilir. Endüstriyel tasarım tescili ile ürün görünümünüz 25 yıla kadar korunur. Yazılım, müzik, sinema, edebiyat ve görsel sanat eserlerinin korunması konusunda da uzman kadromuz hizmetinizdedir.</p>
    `
  },
  {
    id: 3,
    slug: 'sozlesmeler',
    title: 'Sözleşmeler Hukuku',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Profesyonel Sözleşme Danışmanlığı</h3>
      <p>Ticari hayatın temelini oluşturan sözleşmeler, taraflar arasındaki hak ve yükümlülükleri belirleyen kritik belgelerdir. Sözleşme hukuku alanındaki uzmanlığımızla, işletmenizin ve kişisel haklarınızın korunmasını sağlıyoruz. İyi hazırlanmış bir sözleşme, gelecekteki uyuşmazlıkları önlemenin en etkili yoludur.</p>
      
      <h3>Sözleşme Hazırlama ve İnceleme</h3>
      <p>Her türlü ticari ve bireysel sözleşmenin hazırlanması, mevcut sözleşmelerin hukuki açıdan incelenmesi ve risk değerlendirmesi konularında profesyonel destek sağlıyoruz:</p>
      <ul>
        <li><strong>Satış Sözleşmeleri:</strong> Mal ve hizmet satışına ilişkin tüm hükümler</li>
        <li><strong>Kira Sözleşmeleri:</strong> Konut ve işyeri kira ilişkileri</li>
        <li><strong>Franchise Sözleşmeleri:</strong> Marka ve iş modeli lisanslama</li>
        <li><strong>Distribütörlük Sözleşmeleri:</strong> Dağıtım ve bayilik ilişkileri</li>
        <li><strong>Hizmet Sözleşmeleri:</strong> Danışmanlık, yazılım geliştirme, inşaat</li>
        <li><strong>Ortaklık Sözleşmeleri:</strong> Adi ortaklık ve joint venture yapıları</li>
        <li><strong>Gizlilik Sözleşmeleri (NDA):</strong> Ticari sırların korunması</li>
      </ul>
      
      <h3>Sözleşme Müzakereleri</h3>
      <p>Karşı tarafla yürütülecek sözleşme müzakerelerinde müvekkillerimizi temsil ediyoruz. Çıkarlarınızın en iyi şekilde korunması ve dengeli bir anlaşmaya varılması için stratejik danışmanlık sağlıyoruz. Uluslararası sözleşmelerde yabancı hukuk sistemleri ve tahkim klozları konusunda da rehberlik sunuyoruz.</p>
      
      <h3>Uyuşmazlık Çözümü</h3>
      <p>Sözleşmeden kaynaklanan uyuşmazlıklarda arabuluculuk, tahkim ve dava süreçlerinde müvekkillerimizi temsil ediyoruz. Sözleşme ihlali halinde tazminat hesaplaması, cezai şart uygulaması ve fesih işlemlerinde haklarınızı en etkin şekilde savunuyoruz.</p>
    `
  },
  {
    id: 4,
    slug: 'is-ve-sosyal-guvenlik',
    title: 'İş ve Sosyal Güvenlik Hukuku',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>İş Hukuku Alanında Kapsamlı Hizmet</h3>
      <p>İşçi ve işveren arasındaki ilişkilerin hukuki çerçevesini belirleyen iş hukuku, çalışma hayatının en önemli alanlarından biridir. İş Kanunu, Sosyal Sigortalar Kanunu ve ilgili mevzuat çerçevesinde hem bireysel hem de toplu iş hukuku konularında uzman kadromuzla yanınızdayız.</p>
      
      <h3>İşçi Hakları ve Davalar</h3>
      <p>Çalışan olarak haklarınızın korunması ve ihlal durumunda etkin mücadele için yanınızdayız:</p>
      <ul>
        <li><strong>Kıdem Tazminatı:</strong> En az 1 yıl çalışan işçilerin haksız fesihte hak ettiği tazminat</li>
        <li><strong>İhbar Tazminatı:</strong> Bildirim süresine uyulmadan yapılan fesihlerde talep edilebilir</li>
        <li><strong>Fazla Mesai Ücreti:</strong> Haftalık 45 saati aşan çalışmaların %50 zamlı ödenmesi</li>
        <li><strong>Yıllık İzin Alacağı:</strong> Kullandırılmayan izinlerin ücret olarak ödenmesi</li>
        <li><strong>İşe İade Davası:</strong> Geçersiz feshe karşı 30 gün içinde açılmalıdır</li>
        <li><strong>Mobbing Davaları:</strong> İşyerinde psikolojik taciz ve yıldırma</li>
      </ul>
      
      <h3>İşveren Danışmanlığı</h3>
      <p>İşverenlere iş sözleşmesi hazırlama, fesih prosedürleri, toplu iş sözleşmesi müzakereleri ve işyeri yönetmelikleri konularında danışmanlık hizmeti sunuyoruz. İş güvencesi kapsamındaki fesihlerde geçerli neden belgelemeleri ve tutulamalar konusunda rehberlik sağlıyoruz.</p>
      
      <h3>Sosyal Güvenlik İşlemleri</h3>
      <p>SGK prim uyuşmazlıkları, hizmet tespit davaları, emeklilik işlemleri ve iş kazası bildirimleri konularında hukuki destek sağlıyoruz. Prim borçlarının yapılandırılması, itiraz başvuruları ve idari para cezalarına karşı dava süreçlerini yönetiyoruz.</p>
    `
  },
  {
    id: 5,
    slug: 'sirketler-ve-ticaret',
    title: 'Şirketler ve Ticaret Hukuku',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Ticari Hayatınızda Güçlü Hukuki Destek</h3>
      <p>Şirketinizin kuruluşundan günlük operasyonlarına, birleşme ve devralmalardan ticari uyuşmazlıklara kadar her aşamada profesyonel hukuki danışmanlık sunuyoruz. Türk Ticaret Kanunu çerçevesinde şirketinizin tüm hukuki ihtiyaçlarına cevap veriyoruz.</p>
      
      <h3>Şirket Kuruluş ve Yapılandırma</h3>
      <p>İş modelinize en uygun şirket türünü belirleyerek kuruluş sürecini yönetiyoruz:</p>
      <ul>
        <li><strong>Limited Şirket:</strong> En az 10.000 TL sermaye, 1-50 ortak, esnek yönetim</li>
        <li><strong>Anonim Şirket:</strong> En az 50.000 TL sermaye, halka açılabilme imkanı</li>
        <li><strong>Şahıs Şirketi:</strong> Basit yapı, hızlı kuruluş, sınırsız sorumluluk</li>
        <li><strong>Kollektif ve Komandit:</strong> Özel ortaklık yapıları</li>
        <li><strong>Şube ve İrtibat Bürosu:</strong> Yabancı şirketler için Türkiye'de varlık</li>
      </ul>
      
      <h3>Birleşme, Devralma ve Ortaklık</h3>
      <p>Şirket birleşmeleri, bölünmeleri ve devralmaları konusunda kapsamlı hizmet sunuyoruz:</p>
      <ul>
        <li>Due diligence (hukuki inceleme) çalışmaları</li>
        <li>Değerleme ve fiyat müzakereleri</li>
        <li>Hisse devir sözleşmeleri hazırlama</li>
        <li>Ortaklar sözleşmesi ve hissedarlar arası anlaşmalar</li>
        <li>Rekabet Kurumu bildirimleri</li>
      </ul>
      
      <h3>Ticari Uyuşmazlıklar</h3>
      <p>Ticari alacak davaları, haksız rekabet, marka ihlalleri ve distribütörlük uyuşmazlıklarında dava ve arabuluculuk süreçlerinde deneyimli temsil sağlıyoruz. Çek ve senet hukukundan kaynaklanan anlaşmazlıklarda da müvekkillerimizin yanındayız.</p>
    `
  },
  {
    id: 6,
    slug: 'rekabet',
    title: 'Rekabet Hukuku',
    icon: Scale,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Rekabet Hukuku Danışmanlığı</h3>
      <p>Serbest piyasa ekonomisinin temelini oluşturan rekabet kuralları, işletmelerin pazar davranışlarını düzenlemektedir. 4054 sayılı Rekabetin Korunması Hakkında Kanun çerçevesinde işletmenizin uyum süreçlerini yönetiyoruz ve rekabet ihlali iddialarına karşı savunmanızı üstleniyoruz.</p>
      
      <h3>Rekabet Uyum Programları</h3>
      <p>İşletmenizin rekabet kurallarına uyumunu sağlamak için kapsamlı programlar hazırlıyoruz:</p>
      <ul>
        <li><strong>Risk Değerlendirmesi:</strong> Mevcut uygulamaların rekabet hukuku açısından analizi</li>
        <li><strong>Çalışan Eğitimleri:</strong> Satış, pazarlama ve yönetim ekiplerine özel eğitimler</li>
        <li><strong>İç Denetim Sistemleri:</strong> Uyum kontrol mekanizmalarının oluşturulması</li>
        <li><strong>Yazılı Politikalar:</strong> Şirket içi rekabet hukuku rehberleri</li>
      </ul>
      
      <h3>Rekabet Kurumu Süreçleri</h3>
      <p>Rekabet Kurumu soruşturma ve ön araştırmalarında müvekkillerimizi temsil ediyoruz:</p>
      <ul>
        <li>Yerinde incelemeye (dawn raid) hazırlık ve eşlik</li>
        <li>Savunma hazırlığı ve sözlü savunma sunumu</li>
        <li>Birleşme ve devralma bildirimlerinin hazırlanması</li>
        <li>Menfi tespit ve muafiyet başvuruları</li>
        <li>Pişmanlık başvuruları (leniency)</li>
      </ul>
      
      <h3>Haksız Rekabet Davaları</h3>
      <p>Rakipler tarafından yapılan haksız eylemler, ticari itibarınıza ve pazar payınıza ciddi zararlar verebilir. Ticari sırların korunması, kötüleme, aldatıcı reklamlar ve müşteri çalma gibi haksız rekabet hallerinde dava süreçlerini yönetiyoruz.</p>
    `
  },
  {
    id: 7,
    slug: 'basin-ve-medya',
    title: 'Basın ve Medya Hukuku',
    icon: Newspaper,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Basın ve Medya Sektörüne Özel Hukuki Destek</h3>
      <p>Medya kuruluşları, gazeteciler ve içerik üreticileri için özelleşmiş hukuki danışmanlık hizmeti sunuyoruz. Dijital çağda basın özgürlüğü ve sorumluluk dengesinin korunması giderek önem kazanmaktadır. Geleneksel medyadan dijital platformlara kadar tüm mecralarda yanınızdayız.</p>
      
      <h3>Yayın Hakları ve Sözleşmeler</h3>
      <p>Medya sektörünün kendine özgü sözleşme ihtiyaçlarına cevap veriyoruz:</p>
      <ul>
        <li><strong>Yayın Hakları:</strong> Televizyon, radyo ve dijital platform yayın lisansları</li>
        <li><strong>Telif Lisansları:</strong> Müzik, film ve görsel içerik kullanım hakları</li>
        <li><strong>Sponsorluk Anlaşmaları:</strong> Program ve etkinlik sponsorlukları</li>
        <li><strong>Prodüksiyon Sözleşmeleri:</strong> Film, dizi ve belgesel yapım anlaşmaları</li>
        <li><strong>Sunucu ve Oyuncu Sözleşmeleri:</strong> Yetenek kontratları</li>
      </ul>
      
      <h3>Kişilik Hakları ve İtibar</h3>
      <p>Basın yoluyla kişilik haklarının ihlali davalarında hem medya kuruluşlarını hem de mağdur olan bireyleri temsil ediyoruz:</p>
      <ul>
        <li>Cevap ve düzeltme hakkı başvuruları</li>
        <li>Manevi tazminat davaları</li>
        <li>İçerik kaldırma talepleri</li>
        <li>Unutulma hakkı başvuruları</li>
      </ul>
      
      <h3>RTÜK ve Düzenleyici Süreçler</h3>
      <p>RTÜK cezalarına itiraz, yayın lisansı başvuruları ve düzenleyici uyum konularında profesyonel destek sağlıyoruz. İnternet haber siteleri, sosyal medya etkileyicileri ve podcast yayıncıları için de hukuki danışmanlık sunuyoruz.</p>
    `
  },
  {
    id: 8,
    slug: 'tuketici',
    title: 'Tüketici Hukuku',
    icon: HandCoins,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Tüketici Haklarınızı Koruyoruz</h3>
      <p>6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında tüketici olarak sahip olduğunuz hakların korunması ve ihlal durumunda etkin hukuki çözümler sunmak için çalışıyoruz. Bireysel tüketiciler için danışmanlık ve dava takibi hizmeti veriyoruz.</p>
      
      <h3>Ayıplı Mal ve Hizmet</h3>
      <p>Satın aldığınız ürün veya hizmetteki ayıplar nedeniyle doğan haklarınızın takibi konusunda destek sağlıyoruz:</p>
      <ul>
        <li><strong>Ücretsiz Onarım:</strong> Ayıbın giderilmesi talebi</li>
        <li><strong>Ürün Değişimi:</strong> Ayıpsız misliyle değiştirme</li>
        <li><strong>Bedel İadesi:</strong> Sözleşmeden dönme hakkı</li>
        <li><strong>Ayıp Oranında İndirim:</strong> Ayıpla orantılı fiyat indirimi</li>
        <li><strong>Tazminat:</strong> Uğranılan zararların tazmini</li>
      </ul>
      
      <h3>Tüketici Kredileri ve Bankacılık</h3>
      <p>Bankacılık işlemlerinden kaynaklanan tüketici uyuşmazlıklarında hukuki destek sunuyoruz:</p>
      <ul>
        <li>Erken ödeme komisyonu ve kesintilerine itiraz</li>
        <li>Haksız dosya masrafı iade davaları</li>
        <li>Kredi kartı faiz hesaplaması itirazları</li>
        <li>Mortgage ve konut kredisi sorunları</li>
        <li>Yapılandırma ve borç erteleme</li>
      </ul>
      
      <h3>Tüketici Hakem Heyetleri</h3>
      <p>Belirli tutarın altındaki uyuşmazlıklar için tüketici hakem heyetlerine başvuru zorunludur. Başvuru dosyasının hazırlanması, süreç takibi ve hakem heyeti kararlarına itiraz konularında yanınızdayız.</p>
    `
  },
  {
    id: 9,
    slug: 'ceza-ve-infaz',
    title: 'Ceza ve İnfaz Hukuku',
    icon: Gavel,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Ceza Davalarında Profesyonel Savunma</h3>
      <p>Ceza hukuku alanında şüpheli, sanık veya mağdur müvekkillerimize en üst düzeyde hukuki temsil sunuyoruz. Türk Ceza Kanunu ve Ceza Muhakemesi Kanunu çerçevesinde soruşturma aşamasından infaz sürecine kadar her aşamada yanınızdayız. Masumiyet karinesi ilkesi doğrultusunda adil yargılanma hakkınızı savunuyoruz.</p>
      
      <h3>Soruşturma ve Kovuşturma</h3>
      <p>Ceza sürecinin her aşamasında profesyonel savunma sağlıyoruz:</p>
      <ul>
        <li><strong>Gözaltı:</strong> 24 saat içinde müdahale ve ifade öncesi görüşme</li>
        <li><strong>Tutukluluk:</strong> Tutuklamaya itiraz ve tahliye talepleri</li>
        <li><strong>Savcılık İfadesi:</strong> Soruşturma aşamasında avukat eşliği</li>
        <li><strong>Delil Toplama:</strong> Lehte delillerin tespiti ve sunumu</li>
        <li><strong>Duruşma:</strong> Kovuşturma aşamasında aktif savunma</li>
      </ul>
      
      <h3>Temyiz ve Olağanüstü Kanun Yolları</h3>
      <p>Mahkumiyet kararlarına karşı üst derece mahkemelerde müvekkillerimizi temsil ediyoruz:</p>
      <ul>
        <li>İstinaf başvurusu (Bölge Adliye Mahkemesi)</li>
        <li>Temyiz başvurusu (Yargıtay)</li>
        <li>Anayasa Mahkemesi bireysel başvuru</li>
        <li>Yargılamanın yenilenmesi talebi</li>
      </ul>
      
      <h3>İnfaz ve Ceza İndirimi</h3>
      <p>Mahkumiyet sonrası süreçte cezanın infazı ve indirimli uygulamalar konusunda hukuki destek sunuyoruz. Koşullu salıverilme, denetimli serbestlik, ceza erteleme ve hapis cezasının para cezasına çevrilmesi gibi seçenekleri değerlendiriyoruz.</p>
    `
  },
  {
    id: 10,
    slug: 'insan-haklari',
    title: 'İnsan Hakları Hukuku',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Temel Hak ve Özgürlüklerinizin Savunucusu</h3>
      <p>İnsan hakları ihlalleri karşısında ulusal ve uluslararası mekanizmalarda haklarınızı savunuyoruz. Avrupa İnsan Hakları Sözleşmesi ve Anayasada güvence altına alınan temel hakların korunması için hukuki mücadele veriyoruz.</p>
      
      <h3>Avrupa İnsan Hakları Mahkemesi</h3>
      <p>İç hukuk yollarının tüketilmesinin ardından AİHM'e yapılacak bireysel başvuruların hazırlanması ve takibi konusunda deneyimli hukuki destek sağlıyoruz:</p>
      <ul>
        <li><strong>Yaşam Hakkı (m.2):</strong> Güvenlik güçleri ve kamu görevlileri eylemleri</li>
        <li><strong>İşkence Yasağı (m.3):</strong> Kötü muamele ve insanlık dışı cezalar</li>
        <li><strong>Özgürlük Hakkı (m.5):</strong> Keyfi tutuklama ve gözaltı</li>
        <li><strong>Adil Yargılanma (m.6):</strong> Yargılama sürecindeki ihlaller</li>
        <li><strong>Özel Hayat (m.8):</strong> Mahremiyet ve aile hayatının korunması</li>
        <li><strong>İfade Özgürlüğü (m.10):</strong> Basın ve düşünce özgürlüğü</li>
      </ul>
      
      <h3>Anayasa Mahkemesi Bireysel Başvuru</h3>
      <p>2012 yılından itibaren bireyler, temel hak ihlalleri nedeniyle Anayasa Mahkemesi'ne başvurabilmektedir. Olağan kanun yollarının tüketilmesinden sonra 30 gün içinde yapılması gereken bu başvurularda profesyonel destek sağlıyoruz.</p>
      
      <h3>İfade, Toplanma ve Örgütlenme Özgürlüğü</h3>
      <p>Demokratik toplumun temelini oluşturan özgürlüklerin kısıtlanması durumlarında hukuki mücadele yürütüyoruz. Gazeteciler, akademisyenler, sivil toplum kuruluşları ve aktivistlerin haklarını savunuyoruz.</p>
    `
  },
  {
    id: 11,
    slug: 'idare-ve-vergi',
    title: 'İdare ve Vergi Hukuku',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>İdare ile İlişkilerinizde Profesyonel Destek</h3>
      <p>Kamu kurumları ile olan ilişkilerinizde ve vergi uyuşmazlıklarında haklarınızı koruyoruz. İdarenin tek taraflı işlemlerine karşı etkili hukuki çözümler sunuyor, vergi mükelleflerinin haklarını savunuyoruz.</p>
      
      <h3>İdari Davalar</h3>
      <p>İdari yargıda açılacak davaların hazırlık ve takibi konusunda uzman kadromuzla hizmet veriyoruz:</p>
      <ul>
        <li><strong>İptal Davaları:</strong> Hukuka aykırı idari işlemlerin iptali</li>
        <li><strong>Tam Yargı Davaları:</strong> İdarenin verdiği zararların tazmini</li>
        <li><strong>Kamu İhaleleri:</strong> İhale süreçlerine itiraz ve şikayet</li>
        <li><strong>İmar Hukuku:</strong> İmar planı değişiklikleri ve ruhsat uyuşmazlıkları</li>
        <li><strong>Memur Hukuku:</strong> Disiplin cezalarına itiraz, atama ve nakil işlemleri</li>
      </ul>
      
      <h3>Vergi Uyuşmazlıkları</h3>
      <p>Vergi idaresiyle yaşanan uyuşmazlıklarda müvekkillerimizi temsil ediyoruz:</p>
      <ul>
        <li>Vergi tarhiyatlarına itiraz</li>
        <li>Vergi cezalarının iptali davaları</li>
        <li>Vergi affı ve yapılandırma başvuruları</li>
        <li>Transfer fiyatlandırması uyuşmazlıkları</li>
        <li>Vergi planlaması danışmanlığı</li>
      </ul>
      
      <h3>Kamulaştırma ve İmar</h3>
      <p>Kamulaştırma işlemlerinde mülkiyet hakkınızı koruyoruz. Bedel tespit davalarında gerçek değerin belirlenmesi, usulsüz kamulaştırmalara itiraz ve imar planı değişikliklerine karşı dava açılması konularında deneyimli temsil sağlıyoruz.</p>
    `
  },
  {
    id: 12,
    slug: 'dernekler-ve-vakiflar',
    title: 'Dernekler ve Vakıflar Hukuku',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Sivil Toplum Kuruluşlarına Özel Hizmet</h3>
      <p>Dernek ve vakıfların kuruluşundan günlük operasyonlarına kadar tüm hukuki ihtiyaçlarına yönelik kapsamlı danışmanlık hizmeti sunuyoruz. Sivil toplumun güçlenmesi için STK'ların hukuki altyapısının sağlam olması kritik öneme sahiptir.</p>
      
      <h3>Kuruluş ve Tescil</h3>
      <p>Dernek ve vakıf kuruluş süreçlerini A'dan Z'ye yönetiyoruz:</p>
      <ul>
        <li><strong>Dernek Kuruluşu:</strong> En az 7 gerçek veya tüzel kişi ile kurulabilir</li>
        <li><strong>Vakıf Kuruluşu:</strong> Noterde resmi senetle veya vasiyetname ile kurulur</li>
        <li><strong>Tüzük/Senet Hazırlama:</strong> Amaca uygun, mevzuata uyumlu belge hazırlığı</li>
        <li><strong>İzin ve Tescil:</strong> İl dernekler müdürlüğü ve vakıflar müdürlüğü başvuruları</li>
        <li><strong>Uluslararası STK'lar:</strong> Yabancı kuruluşların Türkiye temsilcilikleri</li>
      </ul>
      
      <h3>Yönetim ve Uyum</h3>
      <p>Kuruluş sonrası süreçlerde de yanınızdayız:</p>
      <ul>
        <li>Genel kurul toplantı hazırlık ve yönetimi</li>
        <li>Yönetim kurulu karar taslaklarının hazırlanması</li>
        <li>Üyelik kabul ve ihraç işlemleri</li>
        <li>Yıllık beyanname ve bildirimler</li>
        <li>Denetim ve iç işleyiş düzenlemeleri</li>
      </ul>
      
      <h3>Bağış ve Yardım Kampanyaları</h3>
      <p>Bağış toplama izinleri, vergi muafiyeti başvuruları ve kamu yararına çalışma statüsü kazanılması konularında hukuki destek sunuyoruz. Uluslararası fonların kullanımı ve raporlama yükümlülükleri konusunda rehberlik ediyoruz.</p>
    `
  },
  {
    id: 13,
    slug: 'gayrimenkul',
    title: 'Gayrimenkul Hukuku',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Gayrimenkul İşlemlerinizde Güvenilir Ortak</h3>
      <p>Gayrimenkul alım-satımından kira uyuşmazlıklarına, kat mülkiyetinden imar sorunlarına kadar her alanda profesyonel hukuki destek sunuyoruz. Türkiye'nin en değerli varlık sınıfı olan gayrimenkulde haklarınızı koruyoruz.</p>
      
      <h3>Alım-Satım ve Tapu İşlemleri</h3>
      <p>Gayrimenkul yatırımlarınızda hukuki güvenliği sağlıyoruz:</p>
      <ul>
        <li><strong>Due Diligence:</strong> Tapu sicil araştırması, imar durumu, haciz ve ipotek kontrolü</li>
        <li><strong>Sözleşme Hazırlama:</strong> Ön satış, satış vaadi ve inşaat sözleşmeleri</li>
        <li><strong>Tapu Devri:</strong> İşlem takibi ve vekaletname düzenlenmesi</li>
        <li><strong>İpotek İşlemleri:</strong> Tesis, terkin ve ipotek derecelendirmesi</li>
        <li><strong>İrtifak Hakları:</strong> Geçit hakkı, üst hakkı, intifa hakkı</li>
      </ul>
      
      <h3>Kira Hukuku</h3>
      <p>Konut ve işyeri kira ilişkilerinde her iki tarafı da temsil ediyoruz:</p>
      <ul>
        <li>Kira sözleşmesi hazırlama ve inceleme</li>
        <li>Kira tespit ve uyarlama davaları</li>
        <li>Tahliye davaları (10 yıllık süre, ihtiyaç, yeniden inşa)</li>
        <li>Kira alacağı takibi ve icra işlemleri</li>
        <li>Depozito iadesi uyuşmazlıkları</li>
      </ul>
      
      <h3>Kat Mülkiyeti ve Site Yönetimi</h3>
      <p>Apartman ve site yönetiminden kaynaklanan uyuşmazlıklarda hukuki destek sağlıyoruz. Kat malikleri kurulu kararlarına itiraz, aidat alacak davaları ve ortak alan kullanım anlaşmazlıklarını çözüme kavuşturuyoruz.</p>
    `
  },
  {
    id: 14,
    slug: 'aile',
    title: 'Aile Hukuku',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Aile Hukuku Davalarında Hassas Yaklaşım</h3>
      <p>Aile hukuku davaları, duygusal açıdan en zorlu süreçlerden biridir. Müvekkillerimize hem hukuki hem de insani açıdan destek sağlayarak bu süreci en az hasarla atlatmalarını hedefliyoruz. Özellikle çocukların üstün yararı her zaman önceliğimizdir.</p>
      
      <h3>Boşanma Davaları</h3>
      <p>Evlilik birliğinin sona ermesi sürecinde yanınızdayız:</p>
      <ul>
        <li><strong>Anlaşmalı Boşanma:</strong> En az 1 yıllık evlilikte tarafların mutabakatı ile</li>
        <li><strong>Çekişmeli Boşanma:</strong> Zina, terk, akıl hastalığı, şiddetli geçimsizlik gibi nedenlerle</li>
        <li><strong>Mal Paylaşımı:</strong> Edinilmiş mallara katılma rejimi uygulaması</li>
        <li><strong>Maddi ve Manevi Tazminat:</strong> Kusurlu eşten talep edilebilir</li>
        <li><strong>Boşanma Protokolü:</strong> Anlaşmalı boşanmada her şeyi düzenleyen belge</li>
      </ul>
      
      <h3>Velayet ve Kişisel İlişki</h3>
      <p>Çocukların geleceğini ilgilendiren en kritik konularda profesyonel temsil sağlıyoruz:</p>
      <ul>
        <li>Velayet davası ve velayet değişikliği talepleri</li>
        <li>Kişisel ilişki (görüşme) düzenlenmesi</li>
        <li>Çocuk kaçırma vakalarında Lahey Sözleşmesi başvuruları</li>
        <li>Çocuğun üstün yararı ilkesi çerçevesinde uzlaşma</li>
      </ul>
      
      <h3>Nafaka ve Mal Rejimi</h3>
      <p>Boşanma sürecinde ve sonrasında ekonomik hakların korunması için mücadele ediyoruz. Tedbir nafakası, iştirak nafakası, yoksulluk nafakası talepleri ile mal rejimi tasfiyesi davalarında deneyimli temsil sağlıyoruz. Aile konutu şerhi ve ziynet eşyası davalarını takip ediyoruz.</p>
    `
  },
  {
    id: 15,
    slug: 'icra-ve-iflas',
    title: 'İcra ve İflas Hukuku',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Alacaklarınızın Etkin Takibi</h3>
      <p>Alacaklarınızın tahsili için en etkili yasal yolları kullanıyoruz. İcra ve İflas Kanunu çerçevesinde alacaklı müvekkillerimizin haklarını korurken, borçlu müvekkillerimizin yasal haklarından yararlanmalarını sağlıyoruz.</p>
      
      <h3>İcra Takibi</h3>
      <p>Alacağın niteliğine göre en uygun takip yolunu belirliyoruz:</p>
      <ul>
        <li><strong>İlamsız İcra:</strong> Mahkeme kararına gerek kalmadan para alacakları için</li>
        <li><strong>İlamlı İcra:</strong> Mahkeme kararı veya ilam niteliğindeki belgeye dayalı takip</li>
        <li><strong>Kambiyo Takibi:</strong> Çek, senet ve poliçe alacakları için hızlı prosedür</li>
        <li><strong>Rehnin Paraya Çevrilmesi:</strong> Taşınır veya taşınmaz rehinlerinin nakde çevrilmesi</li>
        <li><strong>İpotek Takibi:</strong> Gayrimenkul ipoteğinin paraya çevrilmesi</li>
      </ul>
      
      <h3>Haciz ve Satış İşlemleri</h3>
      <p>Takip kesinleştikten sonra alacağın tahsili için haciz aşamasına geçilir:</p>
      <ul>
        <li>Menkul ve gayrimenkul hacizi</li>
        <li>Maaş ve banka hesabı haczi</li>
        <li>Üçüncü şahıslarda hak ve alacak haczi</li>
        <li>Hacizli malların satışı (açık artırma)</li>
        <li>Paraların paylaştırılması (sıra cetveli)</li>
      </ul>
      
      <h3>İflas ve Konkordato</h3>
      <p>Ödeme güçlüğü içindeki şirketlere yeniden yapılandırma imkanı sunan konkordato ve iflas süreçlerinde danışmanlık sağlıyoruz. Alacaklı olarak iflas masasına kayıt ve alacağın tahsili, borçlu olarak konkordato projesi hazırlığı konularında uzman destek sunuyoruz.</p>
    `
  },
  {
    id: 16,
    slug: 'tazminat',
    title: 'Tazminat Hukuku',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
    content: `
      <h3>Haklarınız İçin Tazminat Mücadelesi</h3>
      <p>Uğradığınız zararların tazmini için güçlü bir hukuki mücadele yürütüyoruz. Maddi ve manevi her türlü zararınızın en yüksek düzeyde tazmin edilmesini hedefliyoruz. Türk Borçlar Kanunu ve özel mevzuat çerçevesinde haklarınızı savunuyoruz.</p>
      
      <h3>Trafik Kazası Tazminatları</h3>
      <p>Trafik kazalarından kaynaklanan tazminat davalarında uzman temsil sağlıyoruz:</p>
      <ul>
        <li><strong>Ölüm Tazminatı:</strong> Destekten yoksun kalma tazminatı hesaplaması</li>
        <li><strong>Yaralanma Tazminatı:</strong> Tedavi giderleri, sürekli iş göremezlik, geçici iş göremezlik</li>
        <li><strong>Araç Hasar:</strong> Onarım bedeli, değer kaybı, ikame araç</li>
        <li><strong>Manevi Tazminat:</strong> Acı, elem ve üzüntü için</li>
        <li><strong>Sigorta Şirketleri:</strong> ZMSS ve Kasko poliçelerinden tahsilat</li>
      </ul>
      
      <h3>İş Kazası ve Meslek Hastalığı</h3>
      <p>İşveren kusuru nedeniyle meydana gelen iş kazası ve meslek hastalıklarında tazminat davalarını takip ediyoruz:</p>
      <ul>
        <li>Maluliyet oranı tespiti ve aktüerya hesaplamaları</li>
        <li>İşverenin kusur sorumluluğu</li>
        <li>SGK tarafından ödenen tutarların mahsup edilmesi</li>
        <li>SGK rücu davalarında işveren savunması</li>
      </ul>
      
      <h3>Haksız Fiil ve Sorumluluk</h3>
      <p>Her türlü haksız fiilden kaynaklanan tazminat talepleri, ürün sorumluluğu davaları ve malpraktis (doktor hatası) konularında hukuki destek sağlıyoruz. Uzlaşma müzakereleri ve dava süreçlerini en etkili şekilde yönetiyoruz.</p>
    `
  }
];

export default servicesData;
