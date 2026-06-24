export default function Footer() {
  return (
    <footer className=" px-6 lg:px-10 py-20 border-t border-black/10">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <h4 className="font-medium mb-4">
            Product
          </h4>

          <div className="space-y-2 text-neutral-600">
            <p>Features</p>
            <p>Plugins</p>
            <p>Enterprise</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">
            Resources
          </h4>

          <div className="space-y-2 text-neutral-600">
            <p>Docs</p>
            <p>Guides</p>
            <p>Blog</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">
            Company
          </h4>

          <div className="space-y-2 text-neutral-600">
            <p>About</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-4">
            Legal
          </h4>

          <div className="space-y-2 text-neutral-600">
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>

      </div>

    </footer>
  );
}