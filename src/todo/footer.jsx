import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'John'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Wirtten by {this.author}</span>
      </div>
    )
  }
}