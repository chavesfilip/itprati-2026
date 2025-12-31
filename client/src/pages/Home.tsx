/**
 * Página Home - iTpraTi 2026 Rebranding
 * 
 * Design: Futurismo Minimalista - "Soberania Digital"
 * - Cores: Azul Profundo (#003366), Verde Acento (#00CC66)
 * - Tipografia: Poppins (headings) + Inter (body)
 * - Layout: Assimétrico, cascata, timeline
 * - Animações: Scroll triggers (AOS), hover effects, parallax sutil
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = {
    pt: {
      // Navbar
      navbar: {
        inicio: 'Início',
        servicos: 'Serviços',
        planos: 'Planos',
        migracao: 'Migração',
        parcerias: 'Parcerias',
        contacto: 'Contacto',
      },
      // Hero
      hero: {
        slogan: 'A Tua Liberdade Digital Começa Aqui',
        subtitle: 'Não somos um ISP tradicional. Somos uma operadora digital inovadora que coloca a soberania digital no centro.',
        cta1: 'Ver Planos',
        cta2: 'Ser Parceiro',
      },
      // Serviços
      servicos: {
        titulo: 'Nossos Serviços',
        descricao: 'Soluções completas para a tua liberdade digital',
        items: [
          { nome: 'iT-NET', desc: 'Conectividade BYOD com velocidades até 100Mbps' },
          { nome: 'iT-TV', desc: '+200 canais IPTV em qualidade HD/4K' },
          { nome: 'ID Soberano & Wallet', desc: 'Identidade digital blockchain com carteira integrada' },
          { nome: 'Suite Negócios', desc: 'Vendus AGT, Odoo, loja online e ferramentas integradas' },
          { nome: 'iT-Workspace', desc: 'Google Workspace e Microsoft 365 integrados' },
          { nome: 'VPN Soberana', desc: 'Acesso seguro e privado com servidores em Angola' },
        ],
      },
      // Planos
      planos: {
        titulo: 'Planos e Preços',
        descricao: 'Escolha o plano que melhor se adequa às tuas necessidades',
        items: [
          {
            nome: 'Conta',
            preco: 'Grátis',
            velocidade: '10Mbps',
            features: ['ID Soberano', 'Wallet Blockchain', 'Suporte Básico'],
            popular: false,
          },
          {
            nome: 'Conectado',
            preco: '29.990 AOA',
            periodo: '/mês',
            velocidade: '20Mbps',
            features: ['VPN Soberana', 'Email Corporativo', 'IPTV Opcional', 'Suporte 24/7'],
            popular: true,
          },
          {
            nome: 'Integrado',
            preco: '49.900 AOA',
            periodo: '/mês',
            velocidade: '40Mbps',
            features: ['IPTV Completo', 'Workspace', 'Domínio .AO', 'Suporte Premium'],
            popular: false,
          },
          {
            nome: 'Empreendedor',
            preco: '99.900 AOA',
            periodo: '/mês',
            velocidade: 'Máxima',
            features: ['Vendus AGT', 'Loja Online', 'VIP Support', 'Consultoria Incluída'],
            popular: false,
          },
        ],
        ativacao: {
          standard: '99.999 AOA',
          migracao: '55.555 AOA',
        },
      },
      // Migração
      migracao: {
        titulo: 'Migração 2026',
        descricao: 'Transição simples e segura para a iTpraTi',
        features: [
          'BYOD (Bring Your Own Device) - Zero custo',
          'Black Box VIP - Suporte dedicado',
          'Migração de dados segura',
          'Zero tempo de inatividade',
          'Consultoria técnica incluída',
        ],
      },
      // Parcerias
      parcerias: {
        titulo: 'Programa de Parcerias',
        descricao: 'Crescer juntos com oportunidades de negócio',
        revendedor: {
          titulo: 'Revendedor',
          desc: '30% de comissão recorrente',
          features: ['Suporte técnico', 'Marketing materials', 'Painel de controlo'],
        },
        embaixador: {
          titulo: 'Embaixador',
          desc: '1 mês grátis por indicação',
          features: ['Comunidade exclusiva', 'Eventos especiais', 'Reconhecimento público'],
        },
      },
      // Contacto
      contacto: {
        titulo: 'Contacte-nos',
        descricao: 'Tem dúvidas? Estamos aqui para ajudar',
        email: 'support@itprati.ao',
        form: {
          nome: 'Nome',
          email: 'Email',
          mensagem: 'Mensagem',
          enviar: 'Enviar',
          sucesso: 'Mensagem enviada com sucesso!',
        },
      },
      // Rodapé
      footer: {
        copyright: '© 2026 iTpraTi. Todos os direitos reservados.',
        legal: 'Política de Privacidade',
        terms: 'Termos de Serviço',
      },
    },
    en: {
      // Navbar
      navbar: {
        inicio: 'Home',
        servicos: 'Services',
        planos: 'Plans',
        migracao: 'Migration',
        parcerias: 'Partnerships',
        contacto: 'Contact',
      },
      // Hero
      hero: {
        slogan: 'Your Digital Freedom Starts Here',
        subtitle: 'We are not a traditional ISP. We are an innovative digital operator that puts digital sovereignty at the center.',
        cta1: 'View Plans',
        cta2: 'Become a Partner',
      },
      // Serviços
      servicos: {
        titulo: 'Our Services',
        descricao: 'Complete solutions for your digital freedom',
        items: [
          { nome: 'iT-NET', desc: 'BYOD connectivity with speeds up to 100Mbps' },
          { nome: 'iT-TV', desc: '+200 IPTV channels in HD/4K quality' },
          { nome: 'Sovereign ID & Wallet', desc: 'Blockchain digital identity with integrated wallet' },
          { nome: 'Business Suite', desc: 'Vendus AGT, Odoo, online store and integrated tools' },
          { nome: 'iT-Workspace', desc: 'Google Workspace and Microsoft 365 integrated' },
          { nome: 'Sovereign VPN', desc: 'Secure and private access with servers in Angola' },
        ],
      },
      // Planos
      planos: {
        titulo: 'Plans and Pricing',
        descricao: 'Choose the plan that best suits your needs',
        items: [
          {
            nome: 'Account',
            preco: 'Free',
            velocidade: '10Mbps',
            features: ['Sovereign ID', 'Blockchain Wallet', 'Basic Support'],
            popular: false,
          },
          {
            nome: 'Connected',
            preco: '29.990 AOA',
            periodo: '/month',
            velocidade: '20Mbps',
            features: ['Sovereign VPN', 'Corporate Email', 'Optional IPTV', '24/7 Support'],
            popular: true,
          },
          {
            nome: 'Integrated',
            preco: '49.900 AOA',
            periodo: '/month',
            velocidade: '40Mbps',
            features: ['Full IPTV', 'Workspace', '.AO Domain', 'Premium Support'],
            popular: false,
          },
          {
            nome: 'Entrepreneur',
            preco: '99.900 AOA',
            periodo: '/month',
            velocidade: 'Maximum',
            features: ['Vendus AGT', 'Online Store', 'VIP Support', 'Included Consulting'],
            popular: false,
          },
        ],
        ativacao: {
          standard: '99.999 AOA',
          migracao: '55.555 AOA',
        },
      },
      // Migração
      migracao: {
        titulo: '2026 Migration',
        descricao: 'Simple and secure transition to iTpraTi',
        features: [
          'BYOD (Bring Your Own Device) - Zero cost',
          'Black Box VIP - Dedicated support',
          'Secure data migration',
          'Zero downtime',
          'Included technical consulting',
        ],
      },
      // Parcerias
      parcerias: {
        titulo: 'Partnership Program',
        descricao: 'Grow together with business opportunities',
        revendedor: {
          titulo: 'Reseller',
          desc: '30% recurring commission',
          features: ['Technical support', 'Marketing materials', 'Control panel'],
        },
        embaixador: {
          titulo: 'Ambassador',
          desc: '1 month free per referral',
          features: ['Exclusive community', 'Special events', 'Public recognition'],
        },
      },
      // Contacto
      contacto: {
        titulo: 'Contact Us',
        descricao: 'Have questions? We are here to help',
        email: 'support@itprati.ao',
        form: {
          nome: 'Name',
          email: 'Email',
          mensagem: 'Message',
          enviar: 'Send',
          sucesso: 'Message sent successfully!',
        },
      },
      // Rodapé
      footer: {
        copyright: '© 2026 iTpraTi. All rights reserved.',
        legal: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  };

  const content = t[language];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white border-b-2 border-[#003366] z-50 shadow-md">
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#003366] flex items-center justify-center text-white font-bold text-lg">
              iT
            </div>
            <span className="font-bold text-xl text-[#003366]">iTpraTi</span>
          </div>

          <div className="hidden lg:flex gap-8 items-center">
            {Object.entries(content.navbar).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className="underline-animate text-[#003366] hover:text-[#00CC66] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="btn-secondary text-sm px-4 py-2"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="hero-section mt-20 network-pattern"
      >
        <div className="hero-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-up-scale">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {content.hero.slogan}
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {content.hero.subtitle}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#planos" className="btn-accent">
                  {content.hero.cta1}
                </a>
                <a href="#parcerias" className="btn-secondary text-white border-white hover:bg-white hover:text-[#003366]">
                  {content.hero.cta2}
                </a>
              </div>
            </div>
            <div data-aos="slide-right" className="hidden lg:block">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto"
              >
                {/* Rede Digital Animada */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="#00CC66" strokeWidth="2" opacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#00CC66" strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="200" r="50" fill="none" stroke="#00CC66" strokeWidth="2" opacity="0.7" />
                
                {/* Pontos de conexão */}
                {[0, 60, 120, 180, 240, 300].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 200 + 150 * Math.cos(rad);
                  const y = 200 + 150 * Math.sin(rad);
                  return (
                    <g key={angle}>
                      <circle cx={x} cy={y} r="6" fill="#00CC66" />
                      <line
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="#00CC66"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                    </g>
                  );
                })}
                
                {/* Centro */}
                <circle cx="200" cy="200" r="12" fill="#00CC66" />
                <text
                  x="200"
                  y="210"
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="bold"
                  fill="white"
                >
                  iT
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up-scale">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              {content.servicos.titulo}
            </h2>
            <p className="text-xl text-gray-600">
              {content.servicos.descricao}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.servicos.items.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up-scale"
                data-aos-delay={idx * 100}
                className="card-angular"
              >
                <div className="mb-4">
                  <i className={`fas fa-${['wifi', 'tv', 'shield', 'briefcase', 'cloud', 'lock'][idx]} text-3xl text-[#00CC66]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">
                  {item.nome}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-24 bg-[#F5F5F5]">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up-scale">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              {content.planos.titulo}
            </h2>
            <p className="text-xl text-gray-600">
              {content.planos.descricao}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {content.planos.items.map((plano, idx) => (
              <div
                key={idx}
                data-aos="fade-up-scale"
                data-aos-delay={idx * 150}
                className={`p-8 border-2 transition-all duration-300 ${
                  plano.popular
                    ? 'border-[#00CC66] bg-[#003366] text-white shadow-lg scale-105'
                    : 'border-[#003366] bg-white text-black hover:shadow-lg'
                }`}
              >
                {plano.popular && (
                  <div className="mb-4 inline-block bg-[#00CC66] text-black px-3 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plano.popular ? 'text-white' : 'text-[#003366]'}`}>
                  {plano.nome}
                </h3>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${plano.popular ? 'text-[#00CC66]' : 'text-[#00CC66]'}`}>
                    {plano.preco}
                  </span>
                  {plano.periodo && (
                    <span className={plano.popular ? 'text-gray-300' : 'text-gray-600'}>
                      {plano.periodo}
                    </span>
                  )}
                </div>
                <div className={`mb-6 pb-6 border-b-2 ${plano.popular ? 'border-[#00CC66]' : 'border-gray-300'}`}>
                  <p className={`font-semibold ${plano.popular ? 'text-gray-300' : 'text-gray-700'}`}>
                    {plano.velocidade}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plano.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <i className={`fas fa-check ${plano.popular ? 'text-[#00CC66]' : 'text-[#00CC66]'}`}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={plano.popular ? 'btn-accent w-full' : 'btn-primary w-full'}>
                  {language === 'pt' ? 'Escolher Plano' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div data-aos="fade-up-scale" className="bg-white p-8 border-l-4 border-[#003366]">
              <h4 className="text-xl font-bold text-[#003366] mb-2">
                {language === 'pt' ? 'Ativação Standard' : 'Standard Activation'}
              </h4>
              <p className="text-3xl font-bold text-[#00CC66]">
                {content.planos.ativacao.standard}
              </p>
            </div>
            <div data-aos="fade-up-scale" data-aos-delay="100" className="bg-white p-8 border-l-4 border-[#00CC66]">
              <h4 className="text-xl font-bold text-[#003366] mb-2">
                {language === 'pt' ? 'Ativação Migração' : 'Migration Activation'}
              </h4>
              <p className="text-3xl font-bold text-[#00CC66]">
                {content.planos.ativacao.migracao}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migração Section */}
      <section id="migracao" className="py-24 bg-[#003366] text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="slide-left">
              <h2 className="text-4xl font-bold mb-6">
                {content.migracao.titulo}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {content.migracao.descricao}
              </p>
              <ul className="space-y-4">
                {content.migracao.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fas fa-check text-[#00CC66] mt-1"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="slide-right" className="hidden lg:block">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#00CC66]"></div>
                {[
                  { step: '1', title: language === 'pt' ? 'Análise' : 'Analysis' },
                  { step: '2', title: language === 'pt' ? 'Planeamento' : 'Planning' },
                  { step: '3', title: language === 'pt' ? 'Migração' : 'Migration' },
                  { step: '4', title: language === 'pt' ? 'Validação' : 'Validation' },
                ].map((item, idx) => (
                  <div key={idx} className={`mb-8 ${idx % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#00CC66] rounded-full border-4 border-[#003366] flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcerias Section */}
      <section id="parcerias" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up-scale">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">
              {content.parcerias.titulo}
            </h2>
            <p className="text-xl text-gray-600">
              {content.parcerias.descricao}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-up-scale" className="card-angular">
              <div className="mb-4">
                <i className="fas fa-handshake text-4xl text-[#00CC66]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-2">
                {content.parcerias.revendedor.titulo}
              </h3>
              <p className="text-lg font-semibold text-[#00CC66] mb-4">
                {content.parcerias.revendedor.desc}
              </p>
              <ul className="space-y-2">
                {content.parcerias.revendedor.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <i className="fas fa-check text-[#00CC66]"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full mt-6">
                {language === 'pt' ? 'Tornar-se Revendedor' : 'Become a Reseller'}
              </button>
            </div>

            <div data-aos="fade-up-scale" data-aos-delay="100" className="card-angular">
              <div className="mb-4">
                <i className="fas fa-star text-4xl text-[#00CC66]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-2">
                {content.parcerias.embaixador.titulo}
              </h3>
              <p className="text-lg font-semibold text-[#00CC66] mb-4">
                {content.parcerias.embaixador.desc}
              </p>
              <ul className="space-y-2">
                {content.parcerias.embaixador.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <i className="fas fa-check text-[#00CC66]"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full mt-6">
                {language === 'pt' ? 'Tornar-se Embaixador' : 'Become an Ambassador'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 bg-[#F5F5F5]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up-scale">
              <h2 className="text-4xl font-bold text-[#003366] mb-4">
                {content.contacto.titulo}
              </h2>
              <p className="text-xl text-gray-600">
                {content.contacto.descricao}
              </p>
            </div>

            <div data-aos="fade-up-scale" className="bg-white p-12 border-2 border-[#003366]">
              <div className="mb-8 text-center">
                <p className="text-gray-600 mb-2">
                  {language === 'pt' ? 'Email direto:' : 'Direct email:'}
                </p>
                <a
                  href={`mailto:${content.contacto.email}`}
                  className="text-2xl font-bold text-[#00CC66] hover:text-[#003366] transition-colors"
                >
                  {content.contacto.email}
                </a>
              </div>

              <div className="border-t-2 border-gray-300 pt-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#003366] mb-2">
                      {content.contacto.form.nome}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border-2 border-[#003366] focus:outline-none focus:border-[#00CC66]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#003366] mb-2">
                      {content.contacto.form.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border-2 border-[#003366] focus:outline-none focus:border-[#00CC66]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#003366] mb-2">
                      {content.contacto.form.mensagem}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-[#003366] focus:outline-none focus:border-[#00CC66]"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    {content.contacto.form.enviar}
                  </button>

                  {formSubmitted && (
                    <div className="p-4 bg-[#00CC66] text-black text-center font-semibold">
                      {content.contacto.form.sucesso}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00CC66] flex items-center justify-center text-black font-bold">
                  iT
                </div>
                <span className="font-bold text-lg">iTpraTi 2026</span>
              </div>
              <p className="text-gray-300">
                {language === 'pt'
                  ? 'A Tua Liberdade Digital Começa Aqui'
                  : 'Your Digital Freedom Starts Here'}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{language === 'pt' ? 'Links Rápidos' : 'Quick Links'}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#servicos" className="hover:text-[#00CC66] transition-colors">
                    {content.navbar.servicos}
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-[#00CC66] transition-colors">
                    {content.navbar.planos}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-[#00CC66] transition-colors">
                    {content.navbar.contacto}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{language === 'pt' ? 'Legal' : 'Legal'}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#00CC66] transition-colors">
                    {content.footer.legal}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00CC66] transition-colors">
                    {content.footer.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
            <p>{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
