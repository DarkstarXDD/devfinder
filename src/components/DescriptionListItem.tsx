// Was wondering whether a <dl> would be suitable for this situation.
// The below example uses a <dl> for a same type of usecase.
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#metadata
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#wrapping_name-value_groups_in_div_elements

export default function DescriptionListItem({
  name,
  value,
}: {
  name: string
  value: string
}) {
  return (
    <div className="grid justify-items-center gap-1">
      <dt>{name}</dt>
      <dd className="text-base font-bold md:text-lg">{value}</dd>
    </div>
  )
}
