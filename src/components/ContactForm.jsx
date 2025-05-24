import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, SendHorizonal, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9u7fxgc',
      'template_9riwmnl',
      formData,
      'iDyw9Qk0G-2GarRa_'
    ).then(() => {
      setStatus('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      setStatus('Erreur lors de l’envoi du message : ' + error.text);
    });
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-8 max-w-xl mx-auto rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-purple-500 flex items-center justify-center gap-2 mb-6">
        <Mail className="w-6 h-6" /> Me contacter
      </h2>
      <h3 className="text-2xl text-purple-300 flex items-center justify-center gap-2 mb-6">
        E-mail: tfatwo@gmail.com
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Votre nom complet"
            className="pl-10 pr-4 py-3 w-full rounded-lg border text-black font-bold border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Votre adresse e-mail"
            className="pl-10 pr-4 py-3 w-full rounded-lg border text-black font-bold border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            className="pl-10 pr-4 pt-3 w-full rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-800 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <SendHorizonal className="w-4 h-4" />
          Envoyer le message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-purple-600">{status}</p>}
    </section>
  );
}
