export const Detail = ({ label, value }: { label: string; value: string }) => (
  <p>
    <strong className="font-semibold mr-1">{label}:</strong>
    {value}
  </p>
)
