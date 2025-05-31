export default function ProductImages() {
  return (
    <section>
      <label htmlFor="cover-photo">Cover photo</label>
      <div>
        <div>
          <div>
            <label htmlFor="images">
              <span>Upload a file</span>
              <input id="images" name="images" type="file" />
            </label>
            <p>or drag and drop</p>
          </div>
          <p>PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </section>
  );
}
