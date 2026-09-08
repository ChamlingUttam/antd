// // "use client"
// // import { DownloadOutlined, SearchOutlined } from '@ant-design/icons'
// // import { Button } from 'antd'
// // import React, { useState } from 'react'
// // // import App from './components/check/App'
// // // import { SearchOutlined } from '@ant-design/icons';
// // // import { Button, Tooltip } from 'antd';

// // import type { ConfigProviderProps } from 'antd';

// // type SizeType = ConfigProviderProps['componentSize'];



// // const page = () => {
// //    const [size, setSize] = useState<SizeType>('large'); // default is 'medium'
// //   //  const [position, setPosition] = useState<'start' | 'end'>('end');

// //   return (
// //     <div className='bg-red-500'>
// //        {/* <Tooltip title="search">
// //         <Button shape="circle" icon={<SearchOutlined />} />
// //       </Tooltip> */}
// //       {/* <App/> */}
// //        <Button type="primary" icon={<DownloadOutlined />} size={size} />

// //        <Button icon={<SearchOutlined />} type="text"  className='flex text-blue-600 bg-white'>
// //             Search
// //           </Button>

// //            <Button type="primary" icon={<SearchOutlined />}>
// //         Search
// //       </Button>
// //     </div>
// //   )
// // }

// // export default page



// // import React from 'react';
// // import { Button, Flex, Tooltip } from 'antd';

// // const App: React.FC = () => (
// //   <Flex gap="small" vertical>
// //     <Flex wrap gap="small">
// //       <Tooltip title="search">
// //         <Button type="primary" shape="circle" icon={<SearchOutlined />} />
// //       </Tooltip>
// //       <Button type="primary" shape="circle">
// //         A
// //       </Button>
// //       <Button type="primary" icon={<SearchOutlined />}>
// //         Search
// //       </Button>
     
// //       <Button icon={<SearchOutlined />}>Search</Button>
// //     </Flex>
// //     <Flex wrap gap="small">
// //       <Tooltip title="search">
// //         <Button shape="circle" icon={<SearchOutlined />} />
// //       </Tooltip>
// //       <Button icon={<SearchOutlined />}>Search</Button>
// //       <Tooltip title="search">
// //         <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
// //       </Tooltip>
// //       <Button type="dashed" icon={<SearchOutlined />}>
// //         Search
// //       </Button>
// //       <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
// //     </Flex>
// //   </Flex>
// // );

// // export default App;



// "use client"
// import React from 'react';
// import { Flex, Splitter, Typography } from 'antd';

// export const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
//   <Flex justify="center" align="center" style={{ height: '100%' }}>
//     <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
//       {props.text}
//     </Typography.Title>
//   </Flex>
// );

// const page: React.FC = () => (
//   <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//     <Splitter.Panel className="flex" defaultSize="40%" min="20%" max="70%">
//       <Desc  text="
// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur soluta, veniam ad enim porro in officiis labore voluptatibus mollitia quidem iure fuga neque placeat laboriosam voluptate explicabo dolores fugiat minima!" />
//     </Splitter.Panel>
//     <Splitter.Panel>
//       <Desc text="Second" />
//     </Splitter.Panel>
//   </Splitter>
// );


// export default page;




import App from '@/components/check/Pagination'
import React from 'react'

const page = () => {
  return (
    <div>
      <App/>
    </div>
  )
}

export default page
