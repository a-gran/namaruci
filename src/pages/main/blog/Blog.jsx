import React from 'react'
import css from './Blog.module.scss'

const Blog = () => {
	return (
		<div className={css.container}>
			<h2 className={css.blogHeader}>Наш блог</h2>
			<div className={css.blogCards}>
				<div className={css.blogCard}>
					<img
						src="img/blog1.png"
						alt="статья" />
					<div className={css.blogDesc}>
						<div className={css.blogDescHeader}>
							Флаги, знамена, полезная информация, часть I
						</div>
						<div className={css.blogGrade}>
							<span className={css.gradeComments}>21</span>
							<div className={css.gradeViewsLikes}>
								<span className={css.gradeViews}>2321</span>
								<span className={css.gradeLikes}>11</span>
							</div>
						</div>
					</div>
				</div>

				<div className={`${css.blogCard} ${css.cardCol2}`}>
					<img
						src="img/blog2.png"
						alt="статья" />
					<div className={css.blogDesc}>
						<div className={css.blogDescHeader}>
							Флаги, знамена, полезная информация, часть I
						</div>
						<div className={css.blogGrade}>
							<span className={css.gradeComments}>21</span>
							<div className={css.gradeViewsLikes}>
								<span className={css.gradeViews}>2321</span>
								<span className={css.gradeLikes}>11</span>
							</div>
						</div>
					</div>
				</div>

				<div className={`${css.blogCard} ${css.cardCol3}`}>
					<img
						src="img/blog3.png"
						alt="статья" />
					<div className={css.blogDesc}>
						<div className={css.blogDescHeader}>
							Флаги, знамена, полезная информация, часть I
						</div>
						<div className={css.blogGrade}>
							<span className={css.gradeComments}>21</span>
							<div className={css.gradeViewsLikes}>
								<span className={css.gradeViews}>2321</span>
								<span className={css.gradeLikes}>11</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={css.blogPagination}>
				<a href="#">
					<img
						className={css.blogArrow}
						src="icons/page-arrow-left.png"
						alt="стрелка влево"
					/>
				</a>

				<div className={css.blogPages}>
					<div className={css.blogPage}>1</div>
					<div className={css.blogPage}>2</div>
					<div className={`${css.blogPage} ${css.pageFocus}`}>3</div>
					<div className={css.blogPage}>4</div>
					<div className={css.blogPage}>5</div>
					<div className={css.blogPage}>...</div>
					<div className={css.blogPage}>19</div>
				</div>

				<a href="#">
					<img
						className={css.blogArrow}
						src="icons/page-arrow-right.png"
						alt="стрелка влево"
					/>
				</a>
			</div>

			<div className={css.blogBtnBlock}>
				<a
					href="#"
					className={css.blogBtnLink}>
					Смотреть все блоги
				</a>
			</div>
		</div>
	)
}

export default Blog
