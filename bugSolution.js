import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform navigation after component rendering
    navigate('/destination');
  }, [navigate]);

  return (
    <div>
      {/* ... component content ... */}
    </div>
  );
}

export default MyComponent; 