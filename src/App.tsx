import { motion } from "motion/react";
import { Phone, Mail, MapPin, CheckCircle2, ChevronRight, Menu, X, Award, Factory, Users } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNum = "0535 840 8319";
  const email = "semkoru111@gmail.com";
  const address = "Osman Ağa Mahallesi Çilek Sokak No 34 Kadıköy İstanbul";
  const brandName = "Asya Şeffaf Askı";

  const navLinks = [
    { name: "Anasayfa", href: "#hero" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Ürünler", href: "#products" },
    { name: "İletişim", href: "#contact" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">
                A
              </div>
              <span className="text-2xl font-black tracking-tighter text-indigo-950 uppercase">
                {brandName}
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 hover:text-indigo-600 font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${phoneNum.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-tight transition-all shadow-xl shadow-indigo-100 hover:shadow-indigo-200 active:scale-95"
              >
                <Phone size={16} />
                <span>{phoneNum}</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg text-slate-600 hover:text-blue-600 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${phoneNum.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white w-full py-4 rounded-xl font-bold text-lg"
              >
                <Phone size={20} />
                Ara: {phoneNum}
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-indigo-200">
                  seffafaski.com
                </div>
                <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 uppercase">
                  25 YILLIK <br />
                  <span className="text-indigo-600">TECRÜBE</span> HİKAYESİ
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                  Çeyrek asırdır tekstil dünyasına şeffaf çözümler sunuyoruz. İstenilen kalınlıkta, istenilen ölçüde üretilen ürünlerimizle markanızı geleceğe taşıyoruz.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a
                    href={`tel:${phoneNum.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-indigo-200 transition-all hover:-translate-y-1 active:translate-y-0 uppercase tracking-tight"
                  >
                    ŞİMDİ ARAYIN
                  </a>
                  <a
                    href="#products"
                    className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-indigo-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-xl transition-all uppercase tracking-tight"
                  >
                    Ürünler
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0054/6082/0039/files/IMG_0252.jpg?v=1777237146"
                    alt="Asya Şeffaf Askı Üretimi"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-indigo-900 text-white p-8 rounded-3xl shadow-2xl z-20 hidden sm:block max-w-xs">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2">Kişiselleştirilmiş Üretim</h3>
                  <p className="text-indigo-200 text-sm font-medium leading-relaxed">Ürünlerimiz logonuz ve markanızla kişiselleştirilebilir.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Story Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                className="lg:col-span-5 text-center lg:text-left"
                {...fadeIn}
              >
                <h2 className="text-5xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-tight">
                  25 Yıllık Bir Güven Hikayesi
                </h2>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-medium">
                  <p>
                    1990'lı yılların sonundan bugüne, tekstil aksesuarları üretiminde kalite ve güvenin adresi olduk. Her zaman müşteri memnuniyetini en ön planda tuttuk.
                  </p>
                  <p className="border-l-8 border-indigo-600 pl-6 italic text-slate-900">
                    Kadiköy'deki merkezimizde, modern üretim tekniklerini çeyrek asırlık zanaatkar titizliğiyle birleştiriyoruz. 
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-8">
                    <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                      <p className="text-4xl font-black text-indigo-600 tracking-tighter">25+</p>
                      <p className="text-xs font-black text-indigo-800 uppercase tracking-widest">Yıl Tecrübe</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <p className="text-4xl font-black text-slate-900 tracking-tighter">1000+</p>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Partner</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                   <div className="bg-blue-600 h-64 rounded-3xl p-8 flex flex-col justify-end text-white">
                      <Factory size={40} className="mb-4" />
                      <h3 className="text-xl font-bold">Kendi Üretimimiz</h3>
                      <p className="text-blue-100 text-sm">Aracı yok, direkt üreticiden.</p>
                   </div>
                   <div className="bg-slate-100 h-48 rounded-3xl p-8 flex flex-col justify-end text-slate-900">
                      <Users size={40} className="mb-4 text-blue-600" />
                      <h3 className="text-xl font-bold">Uzman Ekip</h3>
                      <p className="text-slate-500 text-sm">Sektörü bilen tecrübeli kadro.</p>
                   </div>
                </motion.div>
                <motion.div 
                  className="space-y-4 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                   <div className="bg-slate-900 h-48 rounded-3xl p-8 flex flex-col justify-end text-white">
                      <CheckCircle2 size={40} className="mb-4 text-blue-400" />
                      <h3 className="text-xl font-bold">Yüksek Kalite</h3>
                      <p className="text-slate-400 text-sm">Dayanıklı ve uzun ömürlü.</p>
                   </div>
                   <div className="bg-blue-100 h-64 rounded-3xl p-8 flex flex-col justify-end text-blue-900">
                      <Award size={40} className="mb-4 text-blue-600" />
                      <h3 className="text-xl font-bold">Orijinal Tasarım</h3>
                      <p className="text-blue-700/70 text-sm">Standartların ötesinde formlar.</p>
                   </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              {...fadeIn}
            >
              <h2 className="text-5xl font-black text-slate-950 mb-4 uppercase tracking-tighter italic">Ürünlerimiz</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                Sektör standartlarını belirleyen şeffaf askı ve şerit çözümleri.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Product 1 */}
              <motion.div 
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group"
                {...fadeIn}
              >
                <div className="h-96 overflow-hidden relative">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0054/6082/0039/files/IMG_0252.jpg?v=1777237146" 
                    alt="Şeffaf Askı" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-indigo-600/90 backdrop-blur-md px-8 py-4">
                    <p className="text-xs font-black uppercase tracking-widest text-white">Orijinal Tasarım</p>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Şeffaf Askı Modelleri</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                    Markanıza özel baskı seçenekleriyle, yüksek dayanıklılıkta ve estetik şeffaf askılar.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Logo baskısı ile kişiselleştirme",
                      "Yüksek taşıma kapasitesi",
                      "Pürüzsüz ve konforlu yüzey",
                    ].map(item => (
                      <li key={item} className="flex items-center gap-4 text-slate-900 font-bold uppercase text-sm tracking-tight">
                        <div className="w-6 h-6 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600">
                           <CheckCircle2 size={16} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${phoneNum.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-tight hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                    TEKLİF ALIN
                  </a>
                </div>
              </motion.div>

              {/* Product 2 */}
              <motion.div 
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group"
                {...fadeIn}
              >
                <div className="h-96 overflow-hidden relative">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0054/6082/0039/files/IMG_0251.jpg?v=1777237146" 
                    alt="Şeffaf Şerit" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md px-8 py-4">
                    <p className="text-xs font-black uppercase tracking-widest text-white">Rulo / Şerit Çözümleri</p>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Şeffaf Şerit & Rulo</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                    İstenilen kalınlıkta ve ölçüde imalat. Şerit olarak almak isteyenlere özel rulo seçenekleri.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Kalınlık ve ölçü seçenekleri",
                      "Top (Rulo) olarak satın alma",
                      "Hızlı teslimat garantisi",
                    ].map(item => (
                      <li key={item} className="flex items-center gap-4 text-slate-900 font-bold uppercase text-sm tracking-tight">
                        <div className="w-6 h-6 bg-slate-100 rounded-md flex items-center justify-center text-slate-600">
                           <CheckCircle2 size={16} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                   <a href={`tel:${phoneNum.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-tight hover:bg-black transition-all shadow-xl shadow-slate-200">
                    SİPARİŞ VERİN
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Customization Details */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-4xl font-bold mb-8"
                {...fadeIn}
              >
                Markanıza Özel Çözümler
              </motion.h2>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <motion.div 
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  {...fadeIn}
                >
                  <h4 className="text-xl font-bold mb-3 text-blue-400">Kişiselleştirme</h4>
                  <p className="text-slate-300">
                    Basılan kısımlar logonuzla ve markanızla kişiselleştirilebilir. Kurumsal kimliğinizi detaylarla yansıtın.
                  </p>
                </motion.div>
                <motion.div 
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  {...fadeIn}
                >
                  <h4 className="text-xl font-bold mb-3 text-blue-400">Esnek Üretim</h4>
                  <p className="text-slate-300">
                    İstenilen kalınlıkta ve istenilen ölçüde üretim yapıyoruz. Projenize en uygun teknik özellikleri belirleyelim.
                  </p>
                </motion.div>
              </div>
              <motion.div 
                className="mt-12 p-8 bg-blue-600 rounded-3xl"
                {...fadeIn}
              >
                <p className="text-2xl font-bold mb-6">Detaylı bilgi ve toptan siparişleriniz için bize ulaşın.</p>
                <a 
                   href={`tel:${phoneNum.replace(/\s/g, '')}`} 
                   className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all active:scale-95"
                >
                  <Phone size={24} />
                  {phoneNum}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div {...fadeIn}>
                <h2 className="text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">İletişim</h2>
                <p className="text-xl text-slate-600 mb-10 font-medium">
                  Sorularınız ve talepleriniz için form doldurabilir veya doğrudan arayabilirsiniz.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="bg-indigo-100 p-5 rounded-2xl text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Telefon</p>
                      <a href={`tel:${phoneNum.replace(/\s/g, '')}`} className="text-2xl font-black text-slate-900 tracking-tight transition-colors">{phoneNum}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="bg-slate-100 p-5 rounded-2xl text-slate-600 shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">E-posta</p>
                      <a href={`mailto:${email}`} className="text-xl font-bold text-slate-900 tracking-tight transition-colors">{email}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-slate-100 p-5 rounded-2xl text-slate-600 shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Adres</p>
                      <p className="text-lg text-slate-900 font-bold leading-tight max-w-xs">
                        {address}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-100 p-10 rounded-[3rem] border-4 border-white shadow-2xl"
                {...fadeIn}
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Adınız Soyadınız</label>
                      <input 
                        type="text" 
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-500">Firma Adı</label>
                       <input 
                        type="text" 
                        placeholder="Örn: Asya Tekstil"
                        className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Telefon Numaranız</label>
                    <input 
                      type="tel" 
                      placeholder="05XX XXX XX XX"
                      className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Mesajınız</label>
                    <textarea 
                      rows={4}
                      placeholder="İhtiyacınızı detaylandırın..."
                      className="w-full px-5 py-4 bg-white border-2 border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all font-bold"
                    ></textarea>
                  </div>
                  <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                    <Mail size={20} />
                    Mesaj Gönder
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
               <span>© 2026 {brandName}</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
               <span className="text-indigo-600">Logo Baskısı Yapılabilir</span>
               <span>Şeffaf Askı Şeridi (Daha kalınları mevcuttur)</span>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-black text-xs">
                A
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href={`tel:${phoneNum.replace(/\s/g, '')}`}
          className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full shadow-2xl shadow-indigo-500 animate-bounce active:scale-95"
        >
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
}

