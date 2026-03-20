import { useState } from 'react';
import ContentHome from '../components/ContentHome';

export default function openLink() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <a href="#home" onClick={() => setIsOpen(!isOpen)}>
        Home
      </a>
      {isOpen && <ContentHome />}
    </li>
  );
}

