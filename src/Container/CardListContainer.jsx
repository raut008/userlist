import React from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import UserCard from '../Components/UserCard';
import { Spinner } from 'react-bootstrap/';

const CardListContainer = () => {
    const [userList, setUserList] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    const getUsersData = () => {
        axios.get(`https://randomuser.me/api/?results=25`, {})
            .then(res => {
                const data = res.data;
                setUserList((prevUserList) => [...prevUserList, ...data.results]);
                setLoaded(true);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const Scroll = React.useCallback(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            !loaded && getUsersData();
        }
    })

    React.useEffect(() => {
        if (!loaded) {
            getUsersData();
        }
        window.addEventListener('scroll', Scroll);
        return () => {
            window.removeEventListener('scroll', Scroll);
        }
    }, []);

    return loaded ? (

        <div>
            <Row className="col-12 m-4 d-flex align-items-center justify-content-center">
                {userList.map(user =>
                    <UserCard
                        key={user.login.uuid}
                        name={user.name.first}
                        picture={user.picture.large}
                        email={user.email}
                    />
                )}
            </Row>
        </div>
    ) : <div className="col-12 m-5 p-5 d-flex align-items-center justify-content-center">
        <Spinner className="m-5 p-5" animation="border" />
    </div>
}

export default CardListContainer
