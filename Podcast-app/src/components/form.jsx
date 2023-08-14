import PropTypes from 'prop-types'

export default function Authentication(props){

const {email ,setEmail ,password,setPassword,isAuthenticated,setIsAuthenticated} = props

const handleSubmit = () =>{
    if(email && password  ){
        setIsAuthenticated(true)

        console.log('isAuthenticated',isAuthenticated)
        
    }else{
        console.log('is not Authenticated',!isAuthenticated)
    }
}



return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th?id=OIP.ZWkx1SHFHdHmqfqRyihfLAHaDe&pid=Api&rs=1&c=1&qlt=95&w=254&h=119')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '300px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <label htmlFor="email" style={{ marginBottom: '5px' }}>
            Email
          </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <label htmlFor="password" style={{ marginBottom: '5px' }}>
            Password
          </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              backgroundColor: '#333',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            Sign-in
          </button>
        </form>
      </div>
    </>
  );
  
}

Authentication.prototype={
    email : PropTypes.string,
    setEmail :PropTypes.func,


}