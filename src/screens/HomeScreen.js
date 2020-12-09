import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import {addDatatoLocalStorage} from '../data/apiData';
import {ScaleLoader} from 'react-spinners';

const HomeScreen = () => {
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const override = `
    display: flex;
    align-items: center;
    justify-content: center;    
    border-color: red;
    `;

    const setDatatoStorage = async () => {
        try{
            setLoading(true);
            const d = await addDatatoLocalStorage();
            localStorage.setItem('data', JSON.stringify(d));
            setLoading(false);
        }catch(error) {
            console.log(error);
        }
    }
    const getDataFromStorage = () => {
        try{
            const arrayOfData =  localStorage.getItem('data');
            const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
            setData(d);
        }catch(error) {
            console.log(error);
        }
    }
    const removeDataFromStorage = () => {
        try{
            localStorage.removeItem('data');
            setData([]);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        
    }, []);
    return (
        <div className="container-fluid">
            <Card>
                <Card.Title className="text-danger font-weight-bold">Save & Retrieve Data from Local Storage</Card.Title>
                <Card.Header>
                    {loading ? (
                        <ScaleLoader
                            css={override}
                            size= {150}
                            color= {"#eb4034"}
                            loading= {loading}
                        />
                    ) : (
                        <>
                        <Button className="btn btn-success mr-3" onClick={() => setDatatoStorage()}>Set Data to LocalStorage</Button>
                        <Button className="btn btn-warning mr-3" onClick={() => getDataFromStorage()}>Get Data from LocalStorage</Button>
                        <Button className="btn btn-danger" onClick={() => removeDataFromStorage()}>Remove Data from LocalStorage</Button>
                        </>
                    )}
                    
                </Card.Header>
                <Card.Body>
                    <div className="row">
                        {Data.map((elem) => 
                            <div className="col-3 p-2" key={elem.id}>
                                <Card className="shadow" style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={elem.url} />
                                    <Card.Body>
                                    <Card.Title>{elem.albumId}</Card.Title>
                                        <Card.Text>
                                            {elem.title}
                                        </Card.Text>
                                        <Button variant="warning" className="text-white">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default HomeScreen;