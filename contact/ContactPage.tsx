import {Container, ContainerFluid} from "../../layouts";
import {FaHome, FaMailBulk, FaPhone} from "react-icons/fa";
import {Label, Textarea, TextInput} from "flowbite-react";

const ContactPage = () => {
    return (
        <ContainerFluid className={"bg-b-bg"}>
            <div className={"w-full h-[50vh]"}>
                <iframe
                    className={"w-full h-full"}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31686.3947274364!2d79.88873950456696!3d6.914578589013398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1673368456574!5m2!1sen!2slk"
                    width="800" height="600" style={{border: 0}} allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-white my-8 shadow">
                    <div
                        className={"h-[30vh] sm:h-full bg-[url('https://images.prismic.io/graingerplc-sites-marketing/b4ef5065-7332-4a79-b1bb-1bf9b38a3227_Windlass+-+Apartments+to+rent.jpg?auto=compress,format&rect=0,0,870,690&w=870&h=690')] bg-cover bg-center"}>
                    </div>

                    <div className={"p-6 text-gray-500"}>
                        <p className={"mb-4 text-justify"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed amet consectetur adipisicing elit. Maxime
                            mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed
                        </p>
                        <div className="flex items-center gap-3 mb-2">
                            <FaHome/>
                            <p>Address: No, 89/2, Horton place, colombo 07</p>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <FaPhone/>
                            <p>Phone: +94 0764582653</p>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <FaPhone/>
                            <p>Phone: +94 113548625</p>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <FaMailBulk/>
                            <p>Email: info@bodima.lk</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto md:w-[50vw] lg:w-[40vw] xl:w-[30vw] p-8 bg-white shadow mb-8">
                    <h1 className="text-2xl font-bold">
                        Contact us
                    </h1>
                    <p className={"pb-2"}>Leave your message below and we will get back to you shortly.</p>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="base"
                                    value="Full Name"
                                />
                            </div>
                            <TextInput
                                id="base"
                                type="text"
                                sizing="md"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="base"
                                    value="Contact Number"
                                />
                            </div>
                            <TextInput
                                id="base"
                                type="tel"
                                sizing="md"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Email"
                                />
                            </div>
                            <TextInput
                                id="small"
                                type="email"
                                sizing="md"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="small"
                                    value="Message"
                                />
                            </div>
                            <Textarea
                                id="small"
                            />
                        </div>

                        <div className={"flex justify-end w-full items-center"}>
                            <button className={"d-btn bg-gray-500 text-white hover:bg-gray-800"} type={"button"}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </ContainerFluid>
    )
}

export default ContactPage