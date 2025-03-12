import { ThemedText, ThemedView } from "@/widgets";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { CameraView } from 'expo-camera'
import { useState } from "react";

export default function CameraScreen() {
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation<any>();
  const device = useCameraDevice('back')
  const { hasPermission } = useCameraPermission()
  console.info({ hasPermission })
  if (!hasPermission || !device) {
    navigation.navigate("Home");
    return <></>
  }

  async function getProduct(data: string) {
    try {
      const resp = await fetch(`https://world.openfoodfacts.org/api/v3/product/${data}.json`);
      const product = await resp.json();
      console.info({ product });
      const brand = product.product?.brands;
      const name = product.product?.generic_name;
      if (!brand || !name) return false;
      const product_details = `${brand}: ${name}`;
      console.info("DONE:", product_details)
      return product_details
    } catch(err) {
      return false
    }
  }

  async function handleBarcodeScanned({ type, data }: any) {
    if (type === "qr") return;
    setScanned(true);
    let product_details = await getProduct(data);
    
    let message = `Bar code with type ${type} and data ${data} has been scanned!`
    console.info({product_details})
    if (product_details) message += ` --- ${product_details}`;
    alert(message);
    navigation.navigate("Home");
  };

  return (
    <ThemedView style={{ flex: 1, padding: 20 }}>
      {/* <Camera
          style={{ flex: 1 }}
          device={device}
          isActive
        /> */}
        <CameraView
          style={{ flex: 1 }}
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        />
    </ThemedView>
  )
}