import { Container, ContainerFluid } from "../../layouts";

import { Button, Select, TextInput } from "flowbite-react";
import ImageUpload from "./components/ImageUpload";
import VerticalTabs from "../../components/common/vertical-tab/verticalTabs";
import CreateAdPage from "./CreateAdPage";



const AdminAd = () => {

    return (
        <VerticalTabs defaultSelectedIndex={1} entries={[        {
          label: "Profile",
          page: <div>Page 1 content</div>,
        },
        {
          label: "Post Ad",
          page: <CreateAdPage />,
        },
        {
          label: "Publish Ads",
          page: <div>Page 3 content</div>,
        },]} />
    )
}

export default AdminAd;