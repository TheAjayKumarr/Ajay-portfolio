import CareerBlaze from "../assets/Career-Blaze.png";
import Myntra from "../assets/Myntra.png";
import E2H from"../assets/E2H.png";
import epochessence from "../assets/epochessence.png";
import historylifestyle from "../assets/historylifestyle.png";

const projects = [
  {
    id: 4,
    slug: "epochessence",
    image: epochessence,
    text: "This is a website on which I have worked as a freelencer.",
    description:["Freelance Project","This is one my many projects that I have worked on as a Shopify Developer freelancer.","A fully functional Shopify e-commerce store for fragrance products, including homepage, product listings, UX design, and cart/checkout flow."],
    tech: ["Shopify"],
    name: "Epoch Essence",
    type: "Shopify Dev",
    live:"https://epochessence.com/",
  },
  {id: 5,
    slug: "history-lifestyle",
    image: historylifestyle,
    text: "This is a website on which I have worked as a freelencer.",
    description: ["Freelance Project","This is one my many projects that I have worked on as a Shopify Developer freelancer.","Developed and deployed HistoryLifestyle.in, a Shopify-based e-commerce store featuring home & lifestyle products, including category pages, product listings, and shopping cart functionality."],
    tech: ["Shopify"],
    name: "History lifestyle",
    type: "Shopify Dev",
    live:"https://historylifestyle.in/?srsltid=AfmBOoq5JbWwT2cHcW2NCtzmKKw7wvDnpcT8PE2GNEtQT8KhWswHzJSa",
  },
  {
    id: 1,
    slug: "career-blaze",
    name: "Career Blaze",
    image: CareerBlaze,
    text: "This is a personal project I built to strengthen my front-end development skills using React.",
    description: ["Career Blaze is a personal project I built to strengthen my front-end development skills using React. While actively searching for jobs myself, I decided to turn that process into a practical learning experience by building a simple job search portal from scratch. The goal was to focus on real-world UI structure, routing, and data handling rather than just isolated components."," The application allows users to browse job listings loaded from a dataset, navigate between different sections using React Router, and experience an organized layout with a fixed sidebar, header, and dynamic content area. I implemented features like job listing cards, basic filtering UI, infinite scrolling, and a clean, responsive interface using Bootstrap, Tailwind CSS, and custom styling. This project helped me gain hands-on experience with component-based architecture, state management, routing, and working with external data in a React application."],
    tech: ["React.js", "Tailwind","HTML","CSS","VScode","Bootstrap","react-dom","react-icons","react-redux","react-router"],
    github: "https://github.com/TheAjayKumarr/Job-Portal",
    type: "Frontend Dev",
  },
  {
    id: 2,
    slug: "myntra-clone",
    image: Myntra,
    text: "This is a personal project I built to strengthen my front-end development skills using React.",
    description: ["For this project, I built a Myntra-style e-commerce website clone by following a comprehensive tutorial that teaches both frontend interface design and core backend logic . The goal was to replicate the look, feel, and functionality of a real online shopping platform while strengthening my understanding of full-stack development.",
    
    "On the frontend, I implemented a responsive user interface with product listings, navigation menus, and interactive elements that mimic the real Myntra shopping experience. This helped me deepen my skills with HTML, CSS, JavaScript, and React (or the technologies used in the tutorial) — especially in building scalable layouts and modern UI components.","On the backend side, I incorporated basic server logic to serve product data and handle interactions, giving the app dynamic behavior rather than being a static front page. This blend of frontend and backend work gave me valuable experience with client-server communication, API integration, and real-world application flow.",
    
    "Overall, this clone project allowed me to practice structuring a larger application, manage state effectively, and think through user interactions in a way that goes beyond simple static pages. It’s a great example of how I can build functional, visually appealing web applications inspired by real world products like major e-commerce platforms such as Myntra."],
    tech: ["React.js", "Tailwind","HTML","CSS","VScode","Bootstrap","node.js","react-dom","react-icons","react-redux","react-router"],
    github: "...",
    name: "Myntra Clone",
    type: "Frontend Dev",

  },
  {
    id: 3,
    slug: "e2h-tans",
    image: E2H,
    text: "English-to-Hindi Neural Translation Model – NLP / Deep Learning Project",
    description: ["English-to-Hindi Neural Translation Model – NLP / Deep Learning Project",

      "For this project, I developed an English-to-Hindi Neural Machine Translation (NMT) system using state-of-the-art transformer-based deep learning techniques. The solution builds upon the Helsinki-NLP/opus-mt-en-hi model and fine-tunes it on a large parallel corpus of English–Hindi sentence pairs to improve translation accuracy and fluency.",
      
      "The workflow includes data preprocessing, tokenization with MarianMT, model fine-tuning using TensorFlow, and evaluating performance on real language data. By training on the IIT Bombay English–Hindi dataset with over 1.6 million aligned sentences, the model learns linguistic patterns that help produce high-quality Hindi output from English input.",
      
      "This project gave me hands-on experience with natural language processing (NLP), transformer architectures, and real-world machine learning workflows. It deepened my understanding of sequence-to-sequence models, tokenizer usage, and deep learning model training — skills highly relevant for building intelligent language applications and AI-driven systems."],
    tech: ["Python", "TensorFlow", "Keras","Hugging Face", "Transformers", "Neural Machine Translation (NMT)", "RNN", "LSTM", "Natural Language Processing (NLP)", "Docker", "Kubernetes", "GitHub", "Jupyter Notebook", "VS Code","HTML"],
    github: "https://github.com/TheAjayKumarr/English-to-Hindi-Neural-Translation-Model",
    name: "Translational Model",
    type: "Machine Learning",

  },
];

export default projects;