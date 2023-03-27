import {ProductCard, ProductGridWrapper} from "../../../../components";

const RelatedAds = () => {
    return (
        <div className={"pt-8 py-12 w-full"}>
            <h1 className={"text-3xl w-full mb-3 font-semibold"}>Related to Your Search</h1>
            <ProductGridWrapper>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </ProductGridWrapper>
        </div>
    )
}
{/*here student can saw the other boarding places related to therir recent search*/}

export default RelatedAds;
