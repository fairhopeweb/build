const AlertIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.57732 2.00005L14.928 13.0001C14.9865 13.1014 15.0173 13.2164 15.0173 13.3334C15.0173 13.4504 14.9865 13.5654 14.928 13.6667C14.8695 13.7681 14.7853 13.8522 14.684 13.9107C14.5826 13.9692 14.4677 14 14.3506 14.0001H1.64932C1.53229 14 1.41733 13.9692 1.31599 13.9107C1.21464 13.8522 1.13049 13.7681 1.07198 13.6667C1.01347 13.5654 0.982665 13.4504 0.982666 13.3334C0.982667 13.2164 1.01347 13.1014 1.07198 13.0001L7.42265 2.00005C7.48116 1.89871 7.56532 1.81456 7.66666 1.75606C7.76801 1.69755 7.88296 1.66675 7.99998 1.66675C8.117 1.66675 8.23196 1.69755 8.3333 1.75606C8.43464 1.81456 8.5188 1.89871 8.57732 2.00005ZM2.80398 12.6667H13.196L7.99998 3.66672L2.80398 12.6667ZM7.33332 10.6667H8.66665V12.0001H7.33332V10.6667ZM7.33332 6.00005L8.66665 6.00005V9.33338H7.33332L7.33332 6.00005Z" />
    </svg>
  );
};

export default AlertIcon;