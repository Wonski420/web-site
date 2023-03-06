import CHome from "../components/CHome";
import CHeader from "../components/CHeader";
import { CNavbar } from "../components/CNavbar";
import { CFooter } from "../components/CFooter";

export default function PlayerSite() {
    return (
        <div>
            <CHome />
            <CHeader />
            <CNavbar start={true} about={true} content={true} playersite={false} />
        </div>
    )
}