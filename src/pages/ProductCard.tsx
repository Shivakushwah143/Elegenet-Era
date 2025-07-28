// import Card from '../components/ui/Card';
// interface ProductCardProps {
//   imageUrl: string;
//   price: string;
//   title: string;
//   imageClassName?: string;
// }
// export function ProductCard({
//   imageUrl,
//   price,
//   title,
//   imageClassName = "h-62 w-72 ",
// }: ProductCardProps) {
//   return (
//     <Card className={`w-76 bg-yellow-400 `}>

//       <Card.Content className='items-center justify-center'>
//         <div className='object-contain aspect-square'>
//           <img
//             src={imageUrl}
//             alt="Product"
//             className={imageClassName}
//           />
//           <Card.Title className='mt-2 text-red-700 font-semibold'>{title}</Card.Title>
//           <h2>{price}</h2>


//         </div>
//       </Card.Content>
//     </Card>
//   );
// }

import Card from '../components/ui/Card';
import Button from '../components/ui/Button'; 

interface ProductCardProps {
  imageUrl: string;
  price: string;
  title: string;
  imageClassName?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  productId:string
}

export function ProductCard({
  imageUrl,
  price,
  title,
  imageClassName = "h-62 w-72",
  onEdit,
  onDelete,
}: ProductCardProps) {
  return (
    <Card className="w-76 bg-yellow-400 relative"> {/* Added relative for positioning */}
      <Card.Content className="items-center justify-center">
        <div className="object-contain aspect-square">
          <img
            src={imageUrl}
            alt="Product"
            className={imageClassName}
          />
          <Card.Title className="mt-2 text-red-700 font-semibold">{title}</Card.Title>
          <h2 className="text-lg font-bold">{price}</h2>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2 justify-center">
          {onEdit && (
            <Button
              variant="outline"
              size="sm"
              onClick={onEdit}
              className="bg-white hover:bg-gray-100"
            >
              Edit
            </Button>
          )}
          {onDelete && (
            <Button
              variant="danger"
              size="sm"
              onClick={onDelete}
              className="hover:bg-red-700"
              
            >
              Delete
            </Button>
          )}
        </div>
      </Card.Content>
    </Card>
  );
}