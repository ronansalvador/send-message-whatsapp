'use client';

import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

export default function Home() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');

  const gerarLink = () => {
    const encodedText = encodeURIComponent(message);
    const newLink = `http://wa.me/${phone}?text=${encodedText}`;
    setLink(newLink);
  };
  return (
    <main className='bg-stone-400 h-screen w-screen flex flex-col justify-evenly items-center'>
      <div className='w-screen flex flex-col justify-evenly items-center gap-y-2'>
        <p>Digite o telefone do destinatário</p>
        <input
          type='phone'
          className='bg-stone-200 rounded-lg p-2 max-sm:w-4/5 w-1/2'
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder='5511999999999'
        />
      </div>
      <div className='w-screen flex flex-col justify-evenly items-center gap-y-2'>
        <p>Digite a sua mensagem</p>
        <textarea
          className='bg-stone-200 rounded-lg p-2 max-sm:w-4/5 max-sm:h-32 w-1/2'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder='Mensagem'
        />
      </div>
      <button
        className='bg-green-800 text-white p-2 rounded-lg hover:scale-125'
        onClick={gerarLink}
      >
        Gerar link
      </button>
      <div>
        {link ? (
          <a
            className='bg-green-800 text-white p-2 rounded-lg flex justify-center items-center'
            href={link}
          >
            <BsWhatsapp className='mr-2' />
            Clique para enviar
          </a>
        ) : (
          ''
        )}
      </div>
    </main>
  );
}
