
import styles from './User.module.scss'
const users = [
{ id: 1, name: "Nguyễn Văn A", email: "a@example.com", role: "Admin", status: "Active" },
{ id: 2, name: "Trần Thị B", email: "b@example.com", role: "Editor", status: "Inactive" },
{ id: 3, name: "Lê Văn C", email: "c@example.com", role: "User", status: "Active" },
{ id: 4, name: "Phạm Thị D", email: "d@example.com", role: "User", status: "Active" },
];
function User() {
    return (
        <div className={styles.userManagement}>
            <div className={styles.userManagementHeader}>
                <div className={styles.userManagementTitle}>User Management</div>
                <a href="#" className={styles.link}>Add user</a>
            </div>
            <div className={styles.tableWrapper}>
                <table className={styles.userTable}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.role}</td>
                                <td>{u.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default User;