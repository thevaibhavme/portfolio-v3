// // components/Masonry.js
// import React from 'react'
// import PropTypes from 'prop-types'

// const DEFAULT_COLUMNS = 2

// // export default function MasonryTest({
// //   breakpointCols = DEFAULT_COLUMNS,
// //   className = '',
// //   columnClassName = '',
// //   columnAttrs = {},
// //   children,
// //   ...rest
// // }) {
// //   // 1️⃣ normalize breakpointCols → { default: number, … }
// //   const bp =
// //     typeof breakpointCols === 'object'
// //       ? breakpointCols
// //       : { default: parseInt(breakpointCols, 10) || DEFAULT_COLUMNS }

// //   // 2️⃣ use only the “default” count
// //   const count = Math.max(1, parseInt(bp.default, 10) || DEFAULT_COLUMNS)

// //   // 3️⃣ flatten children → array
// //   const items = React.Children.toArray(children)

// //   // 4️⃣ bucket items into `count` columns
// //   const columns = Array.from({ length: count }, () => [])
// //   items.forEach((item, i) => {
// //     columns[i % count].push(item)
// //   })

// //   // 5️⃣ render
// //   return (
// //     <div {...rest} className={className}>
// //       {columns.map((colItems, colIndex) => {
// //         const style = {
// //           width: `${100 / count}%`,
// //           ...(columnAttrs.style || {}),
// //         }
// //         return (
// //           <div
// //             key={colIndex}
// //             className={columnClassName}
// //             style={style}
// //             {...columnAttrs}
// //           >
// //             {colItems}
// //           </div>
// //         )
// //       })}
// //     </div>
// //   )
// // }

// // MasonryTest.propTypes = {
// //   /** Number or `{ default: n, … }`; only `default` is used */
// //   breakpointCols: PropTypes.oneOfType([
// //     PropTypes.number,
// //     PropTypes.string,
// //     PropTypes.object,
// //   ]),
// //   className: PropTypes.string,
// //   columnClassName: PropTypes.string,
// //   columnAttrs: PropTypes.object,
// //   children: PropTypes.node,
// // }

// // components/Masonry.jsx
// export default function Masonry({
//   breakpointCols = 2,
//   className = '',
//   columnClassName = '',
//   columnAttrs = {},
//   children,
//   ...rest
// }) {
//   // only use the “default” value server-side
//   const count =
//     typeof breakpointCols === 'object'
//       ? parseInt(breakpointCols.default, 10)
//       : parseInt(breakpointCols, 10);

//   const cols = Math.max(1, count);
//   const items = React.Children.toArray(children);
//   const buckets = Array.from({ length: cols }, () => []);
//   items.forEach((item, i) => buckets[i % cols].push(item));

//   return (
//     <div
//       {...rest}
//       className={className}
//       style={{ '--masonry-col-count': cols }}
//     >
//       {buckets.map((colItems, i) => (
//         <div
//           key={i}
//           className={columnClassName}
//           style={{
//             width: 'calc(100% / var(--masonry-col-count))',
//             ...(columnAttrs.style || {}),
//           }}
//           {...columnAttrs}
//         >
//           {colItems}
//         </div>
//       ))}
//     </div>
//   );
// }


// components/Masonry.jsx
import React from 'react'

export default function Masonry({
  breakpointCols = 3,    // only used server-side to build x wrappers
  className = '',
  columnClassName = '',
  children,
  ...rest
}) {
  const cols = Math.max(
    1,
    typeof breakpointCols === 'object'
      ? parseInt(breakpointCols.default, 10)
      : parseInt(breakpointCols, 10)
  )
  const items = React.Children.toArray(children)
  const buckets = Array.from({ length: cols }, () => [])
  items.forEach((child, i) => buckets[i % cols].push(child))

  return (
    <div {...rest} className={className}>
      {buckets.map((colItems, idx) => (
        <div key={idx} className={columnClassName}>
          {colItems}
        </div>
      ))}
    </div>
  )
}

