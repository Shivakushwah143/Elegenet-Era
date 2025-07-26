import Card from '../components/ui/Card';

// export function ProductCard() {
//   return (
//     <Card className=" w-76 bg-yellow-400">

//       <Card.Content className=' items-center justify-center '>

//         <div className='object-contain  spect-square  '>
//           <img src="https://plus.unsplash.com/premium_photo-1687653092405-66ec72460345?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D" alt="Headphones" className="h-62 w-72" />
//           <div className='mt-2 text-red-700 font-semibold'>
//             <h2 className=''>UP TO 70% OFF</h2>
//             <button className=''>explore more</button>
//           </div>
//         </div>
//       </Card.Content>

//     </Card>
//   );
// }

// import Card from '../components/ui/Card';

interface ProductCardProps {
  imageUrl: string;
  discountText: string;
  buttonText: string;
  imageClassName?: string;
  discountTextClassName?: string;
  buttonClassName?: string;
}
export function ProductCard({
  imageUrl,
  discountText ,
  buttonText ,    
  imageClassName = "h-62 w-72",
}: ProductCardProps) {
  return (
    <Card className={`w-76 bg-yellow-400 `}>
  
      <Card.Content className='items-center justify-center'>
        <div className='object-contain aspect-square'>
          <img 
            src={imageUrl} 
            alt="Product" 
            className={imageClassName} 
          />
          <Card.Title className='mt-2 text-red-700 font-semibold'>{discountText}</Card.Title>
           <button >
              {buttonText}
            </button>
        </div>
      </Card.Content>
    </Card>
  );
}