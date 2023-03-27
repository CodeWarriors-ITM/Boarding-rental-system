import { Container, ContainerFluid } from "../../layouts";
import { FaRegFlag, FaTelegramPlane } from 'react-icons/fa'
import { BiTargetLock } from 'react-icons/bi'
import { Button, Select, TextInput } from "flowbite-react";
import ImageUpload from "./components/ImageUpload";
import VerticalTabs from "../../components/common/vertical-tab/verticalTabs";



const CreateAdPage = () => {

    return (
    
        <ContainerFluid className={"bg-b-bg"}>

            <div className="flex flex-col mx-auto max-w-3xl">
                <div className="mb-4">
                    <label className="block font-medium mb-2 pt-6">Title</label>
                    <TextInput type="text" id="title" className=" rounded w-full px-3 py-2 border-solid border-2 border-black " placeholder="Enter title" />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Description</label>
                    <textarea id="description" className="border rounded w-full px-3 py-2" placeholder="Enter description"></textarea>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Images</label>
                    <div className="border rounded p-4 flex flex-wrap gap-4" id="images">
                        <ImageUpload onFilesChange={()=>null}/>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2 pt-6">Price (Rs)</label>
                    <TextInput type="text" id="title" className=" rounded w-full px-3 border-solid " placeholder="Property Price" />
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Type</label>
                    <select id="type" className="border rounded w-full px-3 py-2">
                        <option value="annex">Annex</option>
                        <option value="rooms">Rooms</option>
                        <option value="hostels">Hostels</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Gender</label>
                    <select id="gender" className="border rounded w-full px-3 py-2">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="any">Any</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-2">Location URL</label>
                    <TextInput type="text" id="location" className="border rounded w-full px-3 py-2" placeholder="Enter location URL" />
                </div>

                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-min self-end right-4">
                    Publish
                </button>
                <br/>
            </div>

        </ContainerFluid>
      
    )
}

export default CreateAdPage;