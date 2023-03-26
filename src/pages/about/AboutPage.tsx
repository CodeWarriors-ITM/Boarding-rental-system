import {Container, ContainerFluid} from "../../layouts";
import {FaRegFlag, FaTelegramPlane} from 'react-icons/fa'
import {BiTargetLock} from 'react-icons/bi'

const AboutPage = () => {
    return (
        <ContainerFluid className={"bg-b-bg"}>
            <Container className={"py-12 min-h-[calc(100vh-364px)] !content-start"}>
                <h1 className="text-3xl w-full pb-16 font-bold text-center">
                    Who We Are
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
                    <div className="flex flex-col items-center gap-4">
                        <FaRegFlag className={"text-2xl"}/>
                        <p className="text-xl font-semibold text-center">
                            Our Mission
                        </p>
                        <p className="text-justify">
                            Connecting Bording Owner & Student
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 md:mt-0">
                        <BiTargetLock className={"text-3xl"}/>
                        <p className="text-xl font-semibold text-center">
                            Our Target
                        </p>
                        <p className="text-justify">
                            We value your sefty and ease finding boarding places,
                            we connent boarding owners with university students while creating a sutainable business oppertunity with it.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 md:mt-0">
                        <FaTelegramPlane className={"text-2xl"}/>
                        <p className="text-xl font-semibold text-center">
                            Our Vision
                        </p>
                        <p className="text-justify">
                            Creating values to students and boarding owners
                            Allowing boarding owners to find students easily
                        </p>
                    </div>
                </div>
            </Container>
        </ContainerFluid>
    )
}

export default AboutPage;