const FeedDropdown = () => {
	return (
		<div
			className="rounded-16 absolute top-16 right-0 py-12 min-w-220 backdrop-blur-md"
			style={{ backgroundColor: 'rgba(255,255,255,.8)', boxShadow: '0 12px 24px -12px rgba(0,0,0,.2)' }}>
			<ul className="flex flex-col gap-4 text-12">
				<li className="px-16">Go to channel</li>
				<li className="px-16">Save</li>
			</ul>
		</div>
	);
};

export default FeedDropdown;
