import Hero from "./Hero";
import SubHero from "./SubHero";
import Trending from "./Trending";
import card1 from "../assests/Img/subcard2.png"
import card2 from "../assests/Img/subcard3.png"
import card3 from "../assests/Img/subcard1.png"
import card4 from "../assests/Img/trending9.png"
import card5 from "../assests/Img/trending10.png"

import img1 from '../assests/Img/trending1.png'
import img2 from '../assests/Img/trending2.png'
import img3 from '../assests/Img/trending3.png'
import img4 from '../assests/Img/trending4.png'
import img5 from '../assests/Img/trending5.png'
import img6 from '../assests/Img/trending6.png'
import img7 from '../assests/Img/trending7.png'
import img8 from '../assests/Img/trending8.png'
import img9 from '../assests/Img/trending11.png'
import img10 from '../assests/Img/trending12.png'
import img11 from '../assests/Img/trending13.png'
import img12 from '../assests/Img/trending14.png'
import Blogs from "./Blogs";
import Friends from "./Friends";

const cardData1 = [
  { id: 0, img: card1, title: 'For Men', subtitle: 'Clothing Bundle Deal' },
  { id: 1, img: card2, title: 'For Women', subtitle: 'Clothing Bundle Deal' },
  { id: 2, img: card3, title: 'Accessories', subtitle: 'Hand Bag Collection' },
]
const cardData2 = [
  { id: 0, img: card4, title: 'Shorts', subtitle: 't-shirt for Men’s' },
  { id: 1, img: card5, title: 'Full Sleeve ', subtitle: 'Shirt for women’s' },
]



const trendingCardData = [
  { id: 0, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img1 },
  { id: 1, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img2 },
  { id: 2, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img3 },
  { id: 3, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img4 },
  { id: 4, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img5 },
  { id: 5, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img6 },
  { id: 6, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img7 },
  { id: 7, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img8 },
]
const trendingCardData2 = [
  { id: 0, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img9 },
  { id: 1, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img10 },
  { id: 2, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img11 },
  { id: 3, text: 'Parka TOM TAILOR OLIVE', price: "Rs: 1440", img: img12 },
]


export default function Home() {
  return (
    <>
      <Hero />
      <SubHero data={cardData1} />
      <Trending title="Trending" data={trendingCardData} showButton />

      <div className="py-10">
        <SubHero data={cardData2} />
      </div>

      <Trending title="Recent Arrivals" data={trendingCardData2} showButton={false} />
      <Blogs />
      <Friends />
    </>
  )
}
