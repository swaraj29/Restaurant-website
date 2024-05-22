import DosaImage from "../images/dosa.jpg";
import CholaImage from "../images/chhola.jpg";
import IdliImage from "../images/idli.jpg";
import MasalaDosaImage from "../images/masala.jpg";
import PaneerImage from "../images/paneer.jpg";
import GujratiImage from "../images/gujrati.jpeg";

export const MenuList = [
  {
    name: "Dosa" ,
    description:
      "Dosa is a popular South Indian dish made from fermented rice and lentil batter. It is a thin, crispy pancake often served with coconut chutney and sambar.",
    
    image: DosaImage ,
    price: "₹200",

  },
  {
    name: "Chola",
    description:
      "Chola is a North Indian dish made from chickpeas cooked with a blend of spices and herbs. It is often served with fried bread like bhature or puri.",
    image: CholaImage,
    price: 250,
  },
  {
    name: "Idli Sambhar",
    description:
      "Idli Sambhar is a traditional South Indian breakfast consisting of steamed rice cakes (idli) served with a spicy lentil stew (sambhar) and coconut chutney.",
    image: IdliImage,
    price: 300,
  },
  {
    name: "Masala Dosa",
    description:
      "Masala Dosa is a variant of dosa filled with a spicy potato filling. It is a popular street food in South India and is usually served with chutney and sambar.",
    image: MasalaDosaImage,
    price: 100,
  },
  {
    name: "Paneer",
    description:
      "Paneer is a fresh cheese common in Indian cuisine. It is often cooked in a rich, aromatic gravy with spices like cumin, coriander, and garam masala.",
    image: PaneerImage,
    price: 400,
  },
  {
    name: "Gujrati",
    description:
      "Gujrati cuisine is known for its variety of sweet, savory, and spicy dishes. A typical Gujrati thali may include dhokla, fafda, khandvi, and more.",
    image: GujratiImage,
    price: 500,
  },
];
