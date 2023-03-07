import {
  card,
  contact,
  contactType,
  data,
  header,
  headerSub,
  me,
} from './card.module.css'

const OverviewCard = () => <div className={`${card} flex-col sm:flex-row items-center sm:items-start mx-4`}>
  <div className={me}>
    <img src="https://www.gravatar.com/avatar/a86c13468543741fef7b0c0c04b1fe61?s=200" />
  </div>
  <div className={`${data} items-center sm:items-start`}>
    <div className={header}>
      Milo Gertjejansen
      <div className={headerSub}>
        Machine Sorcerer
      </div>
    </div>
    <div className={contact}>
      <ul>
        <li className="flex justify-between">
          <span className={contactType}>GitHub</span>
          <a className="webLink" href="https://github.com/milogert">https://github.com/milogert</a>
        </li>
        <li className="flex justify-between">
          <span className={contactType}>Email</span>
          <a className="webLink" href="mailto:&#109;&#105;&#108;&#111;+&#115;&#105;&#116;&#101;&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#108;&#111;&#103;&#101;&#114;&#116;&#046;&#099;&#111;&#109;">&#109;&#105;&#108;&#111;+&#115;&#105;&#116;&#101;&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#109;&#105;&#108;&#111;&#103;&#101;&#114;&#116;&#046;&#099;&#111;&#109;</a>
        </li>
        <li className="flex justify-between">
          <span className={contactType}>LinkedIn</span>
          <a className="webLink" href="https://linkedin.com/in/milogert">https://linkedin.com/in/milogert</a>
        </li>
      </ul>
    </div>
  </div>

</div>

export default OverviewCard
