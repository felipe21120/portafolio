

interface Props {
    subtitle?: string;
    classname?: string;
  }
  
  
  
  export const SubTitle = ( {subtitle, classname}:Props ) => {
      return (
          <div className={ ` ${classname} `} >
              <h2>
                <span className='block mb-2'>
                  {subtitle}
                </span>
                
              </h2>
          </div>
        );
  }