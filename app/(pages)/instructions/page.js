'use client'

export default function InstructionsPage() {
    const instructions = [
        {
            text: 'Search inside the field station for small white tags/chips/discs attached to the walls.',
            imagePath: '/images/NFC-chip.jpg',
            alt: 'An example of a tag/chip/disc'
        },
        {
            text: 'When you have located a tag, place your phone over it to bring up a new webpage.',
            imagePath: '/images/scan-animation.gif',
            alt: 'Animation demonstrating how to scan the chip'
        },
        {
            text: 'Read the information on the page and complete the activity.',
            imagePath: '',
            alt: ''
        },
        {
            text: 'Look for more tags! Your progress will be tracked in a progress bar at the top of the screen.',
            imagePath: '',
            alt: ''
        },
        {
            text: 'Once you have located and completed the activity for each tag, show your completed screen to the site manager to earn a small prize!',
            imagePath: '',
            alt: ''
        },
        {
            text: 'Important! Make sure to NOT use a private/incognito tab and to NOT clear your browsing history while playing the scavenger hunt or else your progress will not be saved correctly!',
            imagePath: '',
            alt: ''
        }
    ]

    return (
        <main className="bg-primary">
            <div className="p-5 flex flex-col gap-10 text-white max-w-[700px] m-auto">
                <div className='flex gap-5 justify-between'>
                    <figure><img src='/images/logos/crfs-logo.png' alt='CRFS Logo' className="w-20" /></figure>
                    <figure><img src='/images/logos/uvu-dgm-logo.png' alt="UVU DGM Logo" className="w-32" /></figure>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-semibold font-cabinSketch">Welcome to the Captiol Reef Field Station Scavenger Hunt!</h1>

                    <div className='flex flex-col gap-12 mb-10'>
                        {instructions.map((step, i) => (
                            <div key={i}>
                                <div className="flex gap-3 mb-3">
                                    <p className="text-4xl font-semibold text-[#BCCE95] flex items-center">{i + 1}</p>
                                    <p className="text-lg">{step.text}</p>
                                </div>

                                <img src={step.imagePath} alt={step.alt} />
                            </div>
                        ))}
                    </div>

                    <a href="/" className="btn btn-accent text-accent-content border border-white mb-10">START</a>
                    <p className="text-center">© UVU DWDD 490R | 2024</p>
                </div>
            </div>
        </main>
    )
}
