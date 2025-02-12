import DesktopHeaderUI from "@/components/DesktopHeaderUI";
import Products from "./products/page";
import BannerUI from "@/components/BannerUI";
import FooterUI from "@/components/FooterUI";


export default function Home() {


  return (
    <>
      <DesktopHeaderUI />
      <BannerUI />
      <Products />
      <FooterUI />
    </>
  );
}
