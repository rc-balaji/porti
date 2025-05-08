import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowUp } from 'react-icons/fa';
import portfolioData from '@/data/portfolio-data';

const Footer = () => {
  const { personal_info } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins">{personal_info.name}</h2>
            <p className="text-gray-400 mt-2">{personal_info.title}</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href={personal_info.social_links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href={personal_info.social_links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href={personal_info.social_links.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a 
              href={personal_info.social_links.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
          
          <div>
            <button 
              onClick={scrollToTop} 
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full inline-block transition-colors"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {personal_info.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
