import React from 'react'

export default function MasonryTest({
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

