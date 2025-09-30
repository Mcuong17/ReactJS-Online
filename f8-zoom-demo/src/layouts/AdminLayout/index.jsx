
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";

import styles from "./AdminLayout.module.scss"

function AdminLayout() {
    return <>
        <div>
            <div className={styles.naivgation}>
                <AdminSidebar/>
            </div>
            <div className={styles.mainLayout}>
                <AdminHeader/>
                <div className={styles.container}></div>
                <AdminFooter/>
            </div>
        </div>
    </>
}

export default AdminLayout;