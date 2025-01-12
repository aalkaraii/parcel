import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  Button,
  Progress,
} from "@nextui-org/react";
import { MapPin, Package, Truck, CreditCard } from "lucide-react";

export function ParcelCard({ parcel, onMessageClick }) {
  const statusColors = {
    "order-placed": "primary",
    processing: "warning",
    "in-transit": "secondary",
    "out-for-delivery": "success",
    delivered: "success",
    canceled: "danger",
  };

  return (
    <Card className="bg-transparent">
      <CardBody>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2">
              <Package size={20} />
              <h3 className="font-medium">{parcel.trackingNumber}</h3>
            </div>
            <p className="text-sm text-default-500 mt-1">
              {parcel.description}
            </p>
          </div>
          <Chip color={statusColors[parcel.status]} variant="flat">
            {parcel.status
              .replace("-", " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}
          </Chip>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={16} />
            <span>{parcel.destination}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Truck size={16} />
            <span>Estimated delivery: {parcel.estimatedDelivery}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <CreditCard size={16} />
            <span>Payment: {parcel.paymentMethod}</span>
          </div>
        </div>

        <Progress
          label="Order Progress"
          value={parcel.progress}
          className="mt-4"
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter>
        <Button
          onPress={() => onMessageClick(parcel)}
          color="primary"
          variant="light"
        >
          Message about this order
        </Button>
      </CardFooter>
    </Card>
  );
}
