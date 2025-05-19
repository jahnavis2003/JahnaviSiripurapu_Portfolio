// import { AnimatePresence } from "motion/react"
// import * as motion from "motion/react-client"
// import { useState } from "react"

// export default function SharedLayoutAnimation() {
//     const [selectedTab, setSelectedTab] = useState(tabs[0])

//     return (
//         <div style={container}>
//             <nav style={nav}>
//                 <ul style={tabsContainer}>
//                     {tabs.map((item) => (
//                         <motion.li
//                             key={item.label}
//                             initial={false}
//                             animate={{
//                                 backgroundColor:
//                                     item === selectedTab ? "#eee" : "#eee0",
//                             }}
//                             style={tab}
//                             onClick={() => setSelectedTab(item)}
//                         >
//                             {`${item.icon} ${item.label}`}
//                             {item === selectedTab ? (
//                                 <motion.div
//                                     style={underline}
//                                     layoutId="underline"
//                                     id="underline"
//                                 />
//                             ) : null}
//                         </motion.li>
//                     ))}
//                 </ul>
//             </nav>
//         </div>
//     )
// }
//             {/* <ul>
//               {navbarItems.map((item)=> (
//                 <motion.li
//                   key={item}
//                   initial={false}
//                   className={item.toLocaleLowerCase()  ===  active? `navbar-items text-pink-100 border-fuchsia-500 shadow-[inset_0_-10px_10px_-5px_rgba(217,70,239,0.5),_0_10px_10px_-4px_rgba(217,70,239,0.5)] p-[40px] pt-4 pb-0`  : `navbar-items text-pink-100 p-[40px] pt-4 pb-0`}
//                   style={tab}
//                   onClick={() => handleClick(item)}
//                 >
//                   {item}
//                   {item.toLocaleLowerCase()  ===  active? (
//                     <motion.div 
//                       layoutId="underline"
//                       id="underline"
//                       className="border-b-4 border-fuchsia-500 shadow-[inset_0_-10px_10px_-5px_rgba(217,70,239,0.5),_0_10px_10px_-4px_rgba(217,70,239,0.5)]" 
//                     />
//                   ) : null}
//                 </motion.li>
//               ))}
//             </ul> */}
// /**
//  * ==============   Styles   ================
//  */

// const container: React.CSSProperties = {
//     width: 480,
//     height: "60vh",
//     maxHeight: 360,
//     borderRadius: 10,
//     background: "white",
//     overflow: "hidden",
//     boxShadow:
//         "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
//     display: "flex",
//     flexDirection: "column",
// }

// const nav: React.CSSProperties = {
//     background: "#fdfdfd",
//     padding: "5px 5px 0",
//     borderRadius: "10px",
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     borderBottom: "1px solid #eeeeee",
//     height: 44,
// }

// const tabsStyles: React.CSSProperties = {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     fontWeight: 500,
//     fontSize: 14,
// }

// const tabsContainer: React.CSSProperties = {
//     ...tabsStyles,
//     display: "flex",
//     width: "100%",
// }

// const tab: React.CSSProperties = {
//     ...tabsStyles,
//     borderRadius: 5,
//     borderBottomLeftRadius: 0,
//     borderBottomRightRadius: 0,
//     width: "100%",
//     padding: "10px 15px",
//     position: "relative",
//     background: "white",
//     cursor: "pointer",
//     height: 24,
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flex: 1,
//     minWidth: 0,
//     userSelect: "none",
//     color: "#0f1115",
// }

// const underline: React.CSSProperties = {
//     position: "absolute",
//     bottom: -2,
//     left: 0,
//     right: 0,
//     height: 2,
//     background: "var(--accent)",
// }

// const iconContainer: React.CSSProperties = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
// }

// const icon: React.CSSProperties = {
//     fontSize: 128,
// }

// /**
//  * ==============   Data   ================
//  */

// const allIngredients = [
//     { icon: "🍅", label: "Tomato" },
//     { icon: "🥬", label: "Lettuce" },
//     { icon: "🧀", label: "Cheese" },
//     { icon: "🥕", label: "Carrot" },
//     { icon: "🍌", label: "Banana" },
//     { icon: "🫐", label: "Blueberries" },
//     { icon: "🥂", label: "Champers?" },
// ]

// const [tomato, lettuce, cheese] = allIngredients
// const tabs = [tomato, lettuce, cheese]