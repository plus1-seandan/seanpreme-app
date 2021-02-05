import { connect } from "react-redux";
import ProfileMain from "../../components/profile-main/profile-main.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./profile.styles.scss";

const ProfilePage = (props) => {
  const { user } = props;

  return (
    <div className="profile-page">
      <div className="profile-sidebar"></div>
      <div className="profile-main">
        <ProfileMain user={user} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});
export default connect(mapStateToProps)(ProfilePage);
