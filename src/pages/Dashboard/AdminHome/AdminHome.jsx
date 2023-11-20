import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {

    const {user} = useAuth()

    return (
        <div>
            <h2>Hi welcome Back</h2>
            {
               user.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default AdminHome;