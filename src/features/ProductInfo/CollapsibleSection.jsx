import React from 'react';
import CollapsibleItem from '../../features/ProductInfo/collapsibleItem';

const CollapsibleSection = () => {
  return (
    <div className="pt-6 md:flex md:justify-center md:items-start pb-6 bg-[#E18AAA] border-t-[1px] border-black">
      <CollapsibleItem 
        imgSrc="https://prod-eurasian-res.popmart.com/default/20240522_112458_380015_____06_____1200x1057.jpg?x-oss-process=image/format,webp"
        title="Click me to show/hide content"
      />
      <CollapsibleItem 
        imgSrc="https://prod-eurasian-res.popmart.com/default/20240522_112458_380015_____06_____1200x1057.jpg?x-oss-process=image/format,webp"
        title="Click me to show/hide content"
      />
    </div>
  );
};

export default CollapsibleSection;
