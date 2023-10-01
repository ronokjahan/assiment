
import { Card, ListGroup } from 'react-bootstrap';
import { FaGithub ,FaGoogle } from "react-icons/fa6";
import { GoogleAuthProvider, getAuth, signInWithPopup,GithubAuthProvider } from "firebase/auth";












const Goglegithub = () => {
  const provider = new GoogleAuthProvider();
  const gitprovider = new GithubAuthProvider();
  
 
  const auth=getAuth()
  const googlehandel=()=>{
   signInWithPopup(auth,provider)
   .then(result=>{
    const logf=result.user
    console.log(logf);
   })
   .catch(erro=>{
    console.log(erro.massage);
   })
  }
 const githandel=()=>{
 signInWithPopup(auth,gitprovider)
 .then(result=>{
  const githan=result.user
  console.log(githan);
 })
 .catch(erro=>{
  console.log(erro.massage);
 })
 }
  
 
  return (
    <Card style={{ width: '18rem' }}>
    <ListGroup variant="flush">
    <button onClick={googlehandel}>  <ListGroup.Item  ><FaGoogle></FaGoogle> Sing Up Witg Google</ListGroup.Item></button>
      <button onClick={githandel}><ListGroup.Item><FaGithub></FaGithub>  Sing up with Github</ListGroup.Item></button>
     
    </ListGroup>
  </Card>
  );
};

export default Goglegithub;