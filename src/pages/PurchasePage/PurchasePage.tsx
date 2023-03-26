import PurchaseSlider from "./components/purchase-slider/PurchaseSlider";
import PurchaseDetails from "./components/purchase-details/PurchaseDetails";
import Reviews from "./reviews/Reviews";
import RelatedAds from "./components/related-ads/RelatedAds";
import {Container, ContainerFluid} from "../../layouts";

const PurchasePage = () => {
    return (
        <ContainerFluid className={"bg-b-bg py-2"}>
            <Container className={"w-full flex flex-col"}>
                <div className="rounded w-full shadow bg-white">
                    <div className="p-4">
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                            <PurchaseSlider/>
                            <PurchaseDetails/>
                        </div>

                        <div className={"pt-4 pb-1"}>
                            <Reviews/>
                        </div>
                    </div>
                </div>

                <RelatedAds/>
            </Container>
        </ContainerFluid>
    )
}

export default PurchasePage;