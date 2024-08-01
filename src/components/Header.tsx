import ImageOmellete from '../assets/images/image-omelette.jpeg'; // Correct way to import images in React

function Header() {
  return <div className="">
  <div>
  <div>
      <img 
        className=" rounded-lg" 
        src={ImageOmellete} />
      <div className="p-7 ">
        <h1 className="  text-3xl font-young-serif font-light ">
          Simple Omelette Recipe
        </h1>
        <p className=" mt-5 min-w-58 font-outfit text-base ">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, 
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
      </div>
    </div>
    </div>
    </div>
  
};

export default Header;



